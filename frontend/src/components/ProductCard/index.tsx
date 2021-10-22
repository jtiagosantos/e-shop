import { Container, ProductImage, Price, NameProduct } from "./styles";

type ProductCardProps = {
  filename: string,
  product_id: {
    name: string,
    price: number,
    inventory: number,
    description: string,
  },
};

export default function ProductCard({ filename, product_id }: ProductCardProps): JSX.Element {
  return(
    <Container>
      <ProductImage 
        src={require(`../../../../backend/public/uploads/${filename}`).default} 
      />
      <Price>R$ {product_id?.price}</Price>
      <NameProduct>{product_id?.name}</NameProduct>
    </Container>
  );
};