import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Navbar from "../../components/Navbar";

import { UpdateProductService } from "../../services/ProductServices";
import { GetProductService } from "../../services/ProductServices";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useProductContext } from "../../hooks/useProductContext";

import { 
  Container,
  Input,
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

type ProductProps = {
  match: {
    params: {
      id: string,
      product_id: string,
    }
  }
}

export default function UpdateProduct({ match }: ProductProps): JSX.Element {
  const [productName, setProductName] = useState<string>();
  const [productPrice, setProductPrice] = useState<number>();
  const [productInventory, setProductInventory] = useState<number>();
  const [productDescription, setProductDescription] = useState<string>();

  const { params: { id } } = match;
  const { params: { product_id } } = match;

  const { token } = useAuthContext();
  const { isProductUpdated, setIsProductUpdated } = useProductContext();

  const history = useHistory();
  
  useEffect(() => {
    async function fetchProductData() {
      const data = await GetProductService(id);

      setProductName(data[0].product_id.name);
      setProductPrice(data[0].product_id.price);
      setProductInventory(data[0].product_id.inventory);
      setProductDescription(data[0].product_id.description);
    };

    fetchProductData();

    return () => {
      fetchProductData();
    };
  }, []);

  useEffect(() => {
    if(isProductUpdated) history.goBack();
  }, [isProductUpdated]);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmitForm(data: Product) {
    try {
      await UpdateProductService(product_id, data, String(token));
      setIsProductUpdated(true);
    } catch(_) {
      toast('Faça login para atualizar um produto!',
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
        <Input 
          {...register('name', { required: true, value: productName })} 
          type='text' 
          placeholder='Nome do produto' 
          value={productName}
          onChange={({target: { value }}) => setProductName(value)}
        />
        <Input 
          {...register('price', { required: true, value: productPrice })} 
          type='number' 
          placeholder='Preço(R$)' 
          value={productPrice}
          onChange={({target: { value }}) => setProductPrice(Number(value))}
        />
        <OptionList 
          {...register('inventory', { required: true, value: productInventory })}
          value={productInventory}
          onChange={({target: { value }}) => setProductInventory(Number(value))}
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
          {...register('description', { required: true, value: productDescription })} 
          placeholder='Descrição do produto' 
          value={productDescription}
          onChange={({target: { value }}) => setProductDescription(value)}
        />
        <Button type="submit">
          <TextButton>Atualizar Produto</TextButton>
        </Button>
      </Form>
      <ErrorContainer>
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