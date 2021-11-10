import Navbar from '../../components/Navbar';

import Image from '../../controle-ps5.jpg';

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
  return(
    <Container>
      <Navbar showOnlyTitle={true} />

      <TopCart>
        <TitleTopCart fontSize={30}>Carrinho de compras</TitleTopCart>
        <TitleTopCart fontSize={20}>Preço</TitleTopCart>
      </TopCart>
      <HorizontalLine marginTop={-4} minWidth={70} borderWidth={2} />

      <CartContents>
        <CartItem>
          <ItemContent>
            <ImageItem src={Image} alt='image' />
            <div>
              <NameItem>Controle PS5</NameItem>
              <Actions>
                <InputItem type='number' />
                <ButtonItem>Atualizar</ButtonItem>
                <VerticalLine />
                <TextDelete>Excluir</TextDelete>
              </Actions>
            </div>
          </ItemContent>
          <PriceItem>R$ 450,00</PriceItem>
        </CartItem>
        <HorizontalLine minWidth={100} borderWidth={1} />

        <CartItem>
          <ItemContent>
            <ImageItem src={Image} alt='image' />
            <div>
              <NameItem>Controle PS5</NameItem>
              <Actions>
                <InputItem type='number' />
                <ButtonItem>Atualizar</ButtonItem>
                <VerticalLine />
                <TextDelete>Excluir</TextDelete>
              </Actions>
            </div>
          </ItemContent>
          <PriceItem>R$ 450,00</PriceItem>
        </CartItem>
        <HorizontalLine minWidth={100} borderWidth={1} />
      </CartContents>
    </Container>
  );
};