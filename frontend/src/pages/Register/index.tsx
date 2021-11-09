import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Navbar from '../../components/Navbar';
import Error from '../../components/Error';

import { RegisterUserService } from '../../services/UserServices';

import { 
  Container, 
  Title, 
  Form, 
  Input,
  Button,
  Message
} from './styles';

type User = {
  name: string,
  email: string,
  password: string,
  confirm_password: string,
};

export default function Register(): JSX.Element {
  const [isRedirectToLoginPage, setIsRedirectToLoginPage] = useState(false);
  const [isShowErrorPasswordsDifferent, setIsShowErrorPasswordsDifferent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    setIsLoading(true);
    try {
      const { name, email, password, confirm_password } = data;

      if(password !== confirm_password) {
        setIsShowErrorPasswordsDifferent(true);
        setIsLoading(false);
      }else {
        setIsShowErrorPasswordsDifferent(false);
        await RegisterUserService({ name, email, password });
        setTimeout(() => {
          setIsLoading(false);
          setIsUserRegistered(true);
          toast('Cadastrado com sucesso!\nRedirecionando...',
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
        
      setTimeout(() => setIsRedirectToLoginPage(true), 6000);
      }
    } catch(_) {
      setTimeout(() => {
        toast('E-mail informado já em uso!',
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

  useEffect(() => {
    return() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onSubmitForm;
    }
  }, []);

  function navigateToLoginPage() {
    history.push('/login');
  }

  return(
    <Container>
      <ToastContainer />

      {isRedirectToLoginPage && <Redirect to='/login' />}

      <Navbar showOnlyTitle={true} />

      <Title>Faça seu cadastro!</Title>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Input 
          type='text'
          {...register('name', { required: true })}
          placeholder='Nome de usuário'
        />
        <Input 
          type='email' 
          {...register('email', { required: true })}
          placeholder='E-mail'
        />
        <Input 
          type='password' 
          {...register('password', { required: true })}
          placeholder='Senha'
        />
        <Input 
          type='password' 
          {...register('confirm_password', { required: true })}
          placeholder='Confirmação da senha'
        />
        {!isLoading ? (
          isUserRegistered ? (
            <Button typeCursor='not-allowed' disabled>Cadastrar</Button>
          ) : (
            <Button>Cadastrar</Button>
          )
        ) : (
          <Button className="w-100 btn btn-lg btn-register" typeCursor='not-allowed' disabled>
            <span 
              className="spinner-border spinner-border-sm mr-2 m-1 h6" 
              role="status" 
              aria-hidden="true"
            ></span>
            Cadastrando...
          </Button>
        )}

        {!isUserRegistered && (
          <Message onClick={navigateToLoginPage}>
            Já é usuário? Faça seu login!
          </Message>
        )}
      </Form>

      {errors.name && <Error message='Nome de usuário é obrigatório!' minWidth={380} />}
      {errors.email && <Error message='E-mail é obrigatório!' minWidth={380} />}
      {errors.password && <Error message='Senha é obrigatória!' minWidth={380} />}
      {errors.confirm_password && <Error message='Confirmar a senha é obrigatório!' minWidth={380} />}
      {isShowErrorPasswordsDifferent && <Error message='Senhas devem ser idênticas!' minWidth={380} />}
    </Container>
  );
};