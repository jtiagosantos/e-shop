import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Navbar from '../../components/Navbar';
import Error from '../../components/Error';

import { AuthenticateUserService } from '../../services/UserServices';

import { useAuthContext } from '../../hooks/useAuthContext';

import { 
  Container, 
  Title, 
  Form, 
  Input,
  Button,
  Message
} from './styles';

type User = {
  email: string,
  password: string,
};

export default function Login(): JSX.Element {
  const [isRedirectToHomePage, setIsRedirectToHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { token, setToken, setUsername, setIsAdmin, setAdminId } = useAuthContext();

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    setIsLoading(true);
    try {
      const { token, username, admin, id } = await AuthenticateUserService(data);
      setToken(token);
      setUsername(username);
      setIsAdmin(admin ? '1' : '0');
      setAdminId(id);
      setTimeout(() => {
        setIsLoading(false);
        toast('Logado com sucesso!\nRedirecionando...',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
      }, 3000);
      setTimeout(() => setIsRedirectToHomePage(true), 6000);
    } catch(_) {
      setTimeout(() => {
        toast('E-mail e/ou senha incorretos!',
        {
          position: "top-right",
          style: {
            borderRadius: '5px',
            background: '#eb654d',
            color: '#fff',
          },
        }
      );
      setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {}, [token]);

  function navigateToRegisterPage() {
    history.push('/register');
  };

  return(
    <Container>
      <ToastContainer />

      {isRedirectToHomePage && <Redirect to='/' />}

      <Navbar showOnlyTitle={true} />

      <Title>Faça seu login!</Title>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Input 
          type='text'
          {...register('email', { required: true })}
          placeholder='E-mail'
        />
        <Input 
          type='password' 
          {...register('password', { required: true })}
          placeholder='Senha'
        />
        {!isLoading ? (
          token ? (
            <Button typeCursor='not-allowed' disabled>Entrar</Button>
          ) : (
            <Button>Entrar</Button>
          )
        ) : (
          <Button className="w-100 btn btn-lg btn-register" typeCursor='not-allowed' disabled>
            <span 
              className="spinner-border spinner-border-sm mr-2 m-1 h6" 
              role="status" 
              aria-hidden="true"
            ></span>
            Entrando...
          </Button>
        )}

        <Message onClick={navigateToRegisterPage}>
          É novo usuário? Faça seu cadastro!
        </Message>
      </Form>

      {errors.email && <Error message='E-mail é um campo obrigatório!' minWidth={380} />}
      {errors.password && <Error message='Senha é um campo obrigatório!' minWidth={380} />}
    </Container>
  );
};