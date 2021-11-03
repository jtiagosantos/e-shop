import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { AuthenticateUserService } from '../../services/UserServices';

import { useAuthContext } from '../../hooks/useAuthContext';

import Navbar from '../../components/Navbar';

import { 
  Container, 
  Title, 
  Form, 
  Input,
  Button,
  TextButton,
  ErrorContainer,
  ErrorMessage,
  ErrorIcon,
  Message
} from './styles';

type User = {
  email: string,
  password: string,
};

export default function Login(): JSX.Element {
  const { setToken } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    try {
      const { token } = await AuthenticateUserService(data);
      setToken(token);
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

        <Message>É novo usuário? Faça seu cadastro!</Message>
      </Form>

      <ErrorContainer>
        {errors.email && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />E-mail é um campo obrigatório!
          </ErrorMessage>
        )}
        {errors.password && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Senha é um campo obrigatório!
          </ErrorMessage>
        )}
      </ErrorContainer>
    </Container>
  );
};