import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { RegisterUserService } from '../../services/UserServices';

import Navbar from '../../components/Navbar';
import Error from '../../components/Error';

import { 
  Container,
  Title,
  Form,
  Input,
  Button
} from './styles';

type User = {
  name: string,
  email: string,
  password: string,
  confirm_password: string,
};

export default function AddAdmin(): JSX.Element {
  const [isShowErrorPasswordsDifferent, setIsShowErrorPasswordsDifferent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdminRegistered, setIsAdminRegistered] = useState(false);

  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  async function onSubmitForm(data: User) {
    setIsLoading(true);
    try {
      const { name, email, password, confirm_password } = data;

      if(password !== confirm_password) {
        setIsShowErrorPasswordsDifferent(true);
        setIsLoading(false);
      } else {
        setIsShowErrorPasswordsDifferent(false);
        await RegisterUserService({ name, email, password, admin: true });
        setTimeout(() => {
          setIsLoading(false);
          setIsAdminRegistered(true);
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

        setTimeout(() => history.push('/administrators'), 6000);
      }
    }catch(_) {
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
  }

  return(
    <Container>
      <ToastContainer />

      <Navbar showOnlyTitle={true} />

      <Title>Cadastre um administrador</Title>

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Input 
          type='text'
          {...register('name', { required: true })}
          placeholder='Nome de administrador'
        />
        <Input 
          type='email' 
          {...register('email', { required: true })}
          placeholder='E-mail de adminstrador'
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
          isAdminRegistered ? (
            <Button typeCursor='not-allowed' disabled>Cadastrar administrador</Button>
          ) : (
            <Button>Cadastrar administrador</Button>
          )
        ) : (
          <Button className="w-100 btn btn-lg btn-register" typeCursor='not-allowed' disabled>
            <span 
              className="spinner-border spinner-border-sm mr-2 m-1 h6" 
              role="status" 
              aria-hidden="true"
            ></span>
            Cadastrando administrador...
          </Button>
        )}
      </Form>

      {errors.name && <Error message='Nome de administrador é obrigatório!' minWidth={380} />}
      {errors.email && <Error message='E-mail de administrador é obrigatório!' minWidth={380} />}
      {errors.password && <Error message='Senha é obrigatória!' minWidth={380} />}
      {errors.confirm_password && <Error message='Confirmar a senha é obrigatório!' minWidth={380} />}
      {isShowErrorPasswordsDifferent && <Error message='Senhas devem ser idênticas!' minWidth={380} />}
    </Container>
  );
};