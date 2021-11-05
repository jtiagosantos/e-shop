import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Navbar from "../../components/Navbar";

import { AddProductService } from "../../services/ProductServices";
import { AddFileService } from "../../services/FileServices";

import { useAuthContext } from "../../hooks/useAuthContext";

import { 
  Container,
  Input,
  InputFile,
  Label,
  TextArea,
  Button,
  TextButton,
  Form,
  OptionList,
  ErrorContainer,
  ErrorMessage,
  ErrorIcon
} from "./styles";

type Product = {
  _id: string,
  name: string,
  price: number,
  inventory: number,
  description: string,
  image: FileList
};

export default function AddProduct(): JSX.Element {
  const { token } = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmitForm(data: Product) {
    try {
      const product = await AddProductService({
        name: data.name,
        price: data.price,
        inventory: Number(data.inventory),
        description: data.description
      }, String(token));
  
      const formData = new FormData();
      formData.append('image', data.image[0]);
  
      await AddFileService(formData, product._id);

      toast('Produto cadastrado com sucesso!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
    } catch(error) {
        toast('Faça login para cadastrar um produto!',
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

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <InputFile>
          <Label htmlFor='file'>Selecione uma foto do produto</Label>
          <Input 
            id='file'
            {...register('image', { required: true })} 
            type='file' 
            accept="image/png, image/jpeg, image/jpg"
          />
        </InputFile>
        <Input 
          {...register('name', { required: true })} 
          type='text' 
          placeholder='Nome do produto' 
        />
        <Input 
          {...register('price', { required: true })} 
          type='number' 
          placeholder='Preço(R$)' 
        />
        <OptionList 
          {...register('inventory', { required: true })}
        >
          <option disabled selected value="">Selecione a quantidade de estoque</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>100</option>
        </OptionList>
        <TextArea 
          {...register('description', { required: true })} 
          placeholder='Descrição do produto' 
        />
        <Button type="submit">
          <TextButton>Cadastrar Produto</TextButton>
        </Button>
      </Form>
      <ErrorContainer>
        {errors.image && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Foto do produto é obrigatória!
          </ErrorMessage>
        )}
        {errors.name && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Nome do produto é obrigatório!
          </ErrorMessage>
        )}
        {errors.price && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Preço do produto é obrigatório!
          </ErrorMessage>
        )}
        {errors.inventory && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Quantidade de estoque é obrigatória!
          </ErrorMessage>
        )}
        {errors.description && (
          <ErrorMessage>
            <ErrorIcon className="fas fa-exclamation-circle" />Descrição do produto é obrigatória!
          </ErrorMessage>
        )}
      </ErrorContainer>
    </Container>
  );
};