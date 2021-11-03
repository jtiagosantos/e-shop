import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
  const [showError, setShowError] = useState<boolean>(false);

  const { setToken } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    try {
      const { token } = await AuthenticateUserService(data);
      setToken(token);
      setShowError(false);
    } catch(_) {
      setShowError(true);
    }
  };

  return(
    <Container>
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

        {showError && (
          <ErrorContainer>
            <ErrorMessage>
              <ErrorIcon className="fas fa-exclamation-circle" />E-mail e/ou senha incorretos!
            </ErrorMessage>
        </ErrorContainer>
        )}
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