import { useState, useEffect } from 'react';

import { GetProductsFromCart } from '../../services/CartService';
import { ProductsResponse } from '../../services/CartService';

import { useAuthContext } from '../../hooks/useAuthContext';

import Navbar from '../../components/Navbar';

import { 
  Container, 
  TopCart, 
  TitleTopCart, 
  HorizontalLine, 
  VerticalLine,
  CartContents,
  CartItem,
  ItemContent,
  ImageItem,
  NameItem,
  InputItem,
  ButtonItem,
  Actions,
  TextDelete,
  PriceItem
} from './styles';

export default function Cart(): JSX.Element {
  const [products, setProducts] = useState<ProductsResponse[]>([]);

  const { token } = useAuthContext();

  useEffect(() => {
    async function fetchProductsCart() {
      if(String(token)) {
        const data = await GetProductsFromCart(String(token));
        setProducts(data);
      }
    }
    fetchProductsCart();
  }, [token]);

  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <TopCart>
        <TitleTopCart fontSize={30}>Carrinho de compras</TitleTopCart>
        <TitleTopCart fontSize={20}>Preço</TitleTopCart>
      </TopCart>
      <HorizontalLine marginTop={-4} minWidth={70} borderWidth={2} />

      <CartContents>
        {products.length > 0 && (
          products.map(product => (
            <>
              <CartItem>
              <ItemContent>
                <ImageItem 
                  src={require(`../../../../backend/public/uploads/${product.file_id.filename}`).default} 
                  alt={product.file_id.filename}
                />
                <div>
                  <NameItem>{product.name}</NameItem>
                  <Actions>
                    <InputItem type='number' value={product.quantity} />
                    <ButtonItem>Atualizar</ButtonItem>
                    <VerticalLine />
                    <TextDelete>Excluir</TextDelete>
                  </Actions>
                </div>
              </ItemContent>
              <PriceItem>R$ {product.price}</PriceItem>
            </CartItem>
            <HorizontalLine minWidth={100} borderWidth={1} />
            </>
          ))
        )}
      </CartContents>
    </Container>
  );
};