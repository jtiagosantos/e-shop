import { useForm } from 'react-hook-form';

import { useModalContext } from '../../hooks/useModalContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { AddAddressService } from '../../services/AddressServices';

import Error from '../Error';

import { 
  Container, 
  Modal, 
  Form,
  Input,
  Button,
  Box
} from './styles';

type Address = {
  logradouro: string,
  numero: number,
  bairro: string,
  cidade: string,
  uf: string,
  cep: number,
};

export default function AddAddressModal(): JSX.Element {  
  const { setOpenModal } = useModalContext();
  const { token } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm<Address>();

  async function onSubmitForm(body: Address) {
    setOpenModal(false);
    try {
      await AddAddressService(body, String(token));
    } catch(error: any) {
      console.log(error);
    }
  };

  return(
    <Container>
      <Modal>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input 
            type='text' 
            {...register('logradouro', { required: true })}
            placeholder='Rua/Avenida' 
          />
          <Input 
            type='number' 
            {...register('numero', { required: true })}
            placeholder='Número' 
          />
          <Input 
            type='text'
            {...register('bairro', { required: true })}
            placeholder='Bairro' 
          />
          <Input 
            type='text' 
            {...register('cidade', { required: true })}
            placeholder='Cidade' 
          />
          <Input 
            type='text' 
            {...register('uf', { required: true })}
            placeholder='Estado Ex: AM' 
          />
          <Input 
            type='number'
            {...register('cep', { required: true, maxLength: 8 })}
            placeholder='CEP' 
          />
          <Box>
            <Button onClick={() => setOpenModal(false)} type='button'>Fechar</Button>
            <Button>Salvar</Button>
          </Box>
        </Form>

        {errors.logradouro && <Error message='Rua/Avenida é obrigatória!' minWidth={250} fontSize='12px' />}
        {errors.numero && <Error message='Número é obrigatório!' minWidth={250} fontSize='12px' />}
        {errors.bairro && <Error message='Bairro é obrigatório!' minWidth={250} fontSize='12px' />}
        {errors.cidade && <Error message='Cidade é obrigatória!' minWidth={250} fontSize='12px' />}
        {errors.uf && <Error message='Estado é obrigatório!' minWidth={250} fontSize='12px' />}
        {errors.cep && <Error message='CEP é obrigatório!' minWidth={250} fontSize='12px' />}
      </Modal>
    </Container>
  );
};