import { useForm } from "react-hook-form";

import Navbar from "../Navbar";
import { AddProductService } from "../../services/ProductServices";
import { AddFileService } from "../../services/FileServices";

import { 
  Container,
  Input,
  TextArea,
  Button,
  TextButton,
  Form
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
  const { register, handleSubmit } = useForm();

  async function onSubmitForm(data: Product) {
    const product = await AddProductService({
      name: data.name,
      price: data.price,
      inventory: data.inventory,
      description: data.description
    });

    console.log(product);

    const formData = new FormData();
    formData.append('image', data.image[0]);

    const file = await AddFileService(formData, product._id);
    console.log(file);
  };

  return(
    <Container>
      <Navbar showOnlyTitle={true} />
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input {...register('image')} type='file' />
          <Input {...register('name')} type='text' placeholder='Nome do produto' />
          <Input {...register('price')} type='number' placeholder='Preço(R$)' />
          <Input {...register('inventory')} type='number' placeholder='Qtd. estoque' />
          <TextArea {...register('description')} placeholder='Descrição do produto' />
          <Button type="submit">
            <TextButton>Adicionar Produto</TextButton>
          </Button>
        </Form>
    </Container>
  );
};