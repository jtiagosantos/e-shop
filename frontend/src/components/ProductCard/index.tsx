import { useHistory } from 'react-router-dom';

import { Container, ProductImage, Price, NameProduct } from "./styles";

type ProductCardProps = {
  id: string,
  filename: string,
  product_id: {
    name: string,
    price: number,
    inventory: number,
    description: string,
  },
};

export default function ProductCard({ id, filename, product_id }: ProductCardProps): JSX.Element {
  const history = useHistory();

  function navigateToProductPage(id: string) {
    history.push(`/product/${id}`)
  };

  return(
    <Container
      onClick={() => navigateToProductPage(id)}
    >
      <ProductImage 
        src={require(`../../../../backend/public/uploads/${filename}`).default} 
        alt={product_id.name}
      />
      <Price>R$ {product_id?.price}</Price>
      <NameProduct>{product_id?.name}</NameProduct>
    </Container>
  );
};