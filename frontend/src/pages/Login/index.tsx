import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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
  TextButton,
  Message
} from './styles';

type User = {
  email: string,
  password: string,
};

export default function Login(): JSX.Element {
  const { setToken, setUsername } = useAuthContext();

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    try {
      const { token, username } = await AuthenticateUserService(data);
      setToken(token);
      setUsername(username);
      toast('Logado com sucesso!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
    } catch(_) {
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
    }
  };

  function navigateToRegisterPage() {
    history.push('/register');
  };

  return(
    <Container>
      <ToastContainer />

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
        <Button>
          <TextButton>Entrar</TextButton>
        </Button>

        <Message onClick={navigateToRegisterPage}>
          É novo usuário? Faça seu cadastro!
        </Message>
      </Form>

      {errors.email && <Error message='E-mail é um campo obrigatório!' minWidth={380} />}
      {errors.password && <Error message='Senha é um campo obrigatório!' minWidth={380} />}
    </Container>
  );
};