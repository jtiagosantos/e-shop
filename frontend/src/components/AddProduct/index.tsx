import {  } from 'react';

import Navbar from "../Navbar";
import { AddProductService } from "../../services/ProductServices";

import { 
  Container,
  InputContainer, 
  Input,
  TextArea,
  ButtonContainer,
  Button,
  TextButton,
  Form
} from "./styles";

export default function AddProduct(): JSX.Element {
  async function handleSubmitForm() {

  }

  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <InputContainer>
        <Form>
          <Input type='text' placeholder='Nome do produto' name='name' />
          <Input type='text' placeholder='Preço(R$)' name='price' />
          <Input type='text' placeholder='Qtd. estoque' name='inventory' />
          <TextArea placeholder='Descrição do produto' name='description' />
        </Form>
      </InputContainer>

      <ButtonContainer>
        <Button>
          <TextButton>Adicionar Produto</TextButton>
        </Button>
      </ButtonContainer>
    </Container>
  );
};