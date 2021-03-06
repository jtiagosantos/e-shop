import { useState, useEffect, FormEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { 
  GetProductsFromCartService, 
  GetTotalPriceCartService,
  DeleteProductFromCartService
} from '../../services/CartServices';
import { UpdateProductFromCartService } from '../../services/CartServices';
import { ProductsResponse } from '../../services/CartServices';

import { useAuthContext } from '../../hooks/useAuthContext';

import Navbar from '../../components/Navbar';
import LoadingV2 from '../../components/LoadingV2';

import { 
  Container, 
  TopCart, 
  TitleTopCart, 
  HorizontalLine, 
  VerticalLine,
  CartContents,
  CartItem,
  ItemContent,
  ImageItemContainer,
  ImageItem,
  NameItem,
  InputItem,
  ButtonItem,
  Actions,
  TextDelete,
  PriceItem,
  TotalPriceText,
  EmptyCartText,
  ButtonContainer,
  Button
} from './styles';

type FormElements = HTMLFormControlsCollection & {
  inputQuantity: HTMLInputElement,
  inputId: HTMLInputElement,
};

type InputFormElements = HTMLFormElement & {
  readonly elements: FormElements,
};

type Product = {
  quantity: number,
  id: string,
};

export default function Cart(): JSX.Element {
  const [products, setProducts] = useState<ProductsResponse[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | undefined>(0);
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAuthContext();
  
  const history = useHistory();

  const { register } = useForm<Product>();

  const getTotalPrice = useCallback(async () => {
    if(String(token)) {
      const data = await GetTotalPriceCartService(String(token));
      return data;
    }
  }, [token]);

  const getProductsCart = useCallback(async () => {
    if(String(token)) {
      const data = await GetProductsFromCartService(String(token));
      return data;
    }
    return [];
  }, [token]);

  async function submitForm(event: FormEvent<InputFormElements>) {
    event.preventDefault();
    const quantity = Number(event.currentTarget.elements.inputQuantity.value);
    const id = event.currentTarget.elements.inputId.value;

    if(quantity < 1) {
      toast('Quantidade deve ser um valor maior que zero!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#eb654d',
            color: '#fff',
          },
        }
      );
      return;
    }
    
    const data = { quantity };

    await UpdateProductFromCartService(String(token), id, data);

    toast('Carrinho atualizado!',
      {
        position: "top-right",
        style: {
          borderRadius: '8px',
          background: '#7bcc39',
          color: '#fff',
        },
      }
    );

    setProducts(await getProductsCart());
    setTotalPrice(await getTotalPrice());
  }

  async function deleteProductFromCart(id: string) {
    await DeleteProductFromCartService(String(token), id);
    setProducts(await getProductsCart());
    setTotalPrice(await getTotalPrice());

    toast('Produto removido do carrinho!',
      {
        position: "top-right",
        style: {
          borderRadius: '8px',
          background: '#7bcc39',
          color: '#fff',
        },
      }
    );
  };

  useEffect(() => {
    (async () => setProducts(await getProductsCart()))();
  }, [getProductsCart, token]);

  useEffect(() => {
    (async () => setTotalPrice(await getTotalPrice()))();
  }, [getTotalPrice]);

  function navigateToChooseAddressPage() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      history.push('/address');
    }, 3000);
  };

  return(
    <Container>
      <ToastContainer />

      {isLoading && <LoadingV2 />}

      <Navbar showOnlyTitle={true} />

      <TopCart>
        <TitleTopCart fontSize={30}>Carrinho de compras</TitleTopCart>
        <TitleTopCart fontSize={20}>Pre??o</TitleTopCart>
      </TopCart>
      <HorizontalLine marginTop={-4} minWidth={70} borderWidth={2} />

      {products.length > 0 && (
        <>
          <CartContents>
            {products.map(product => (
              <>
                <CartItem>
                <ItemContent>
                  <ImageItemContainer>
                    <ImageItem 
                      src={require(`../../../../backend/public/uploads/${product.file_id.filename}`).default} 
                      alt={product.file_id.filename}
                    />
                  </ImageItemContainer>
                  <div>
                    <NameItem>{product.product_id.name}</NameItem>
                    <Actions>
                      <form onSubmit={submitForm}>
                        <InputItem 
                          type='number'
                          id='inputQuantity'
                          {...register('quantity', { required: true, value: product.quantity })}
                        />
                        <InputItem 
                          hidden
                          type='text'
                          id='inputId'
                          {...register('id', { value: product._id })}
                        />
                        <ButtonItem type='submit'>Atualizar</ButtonItem>
                      </form>
                      <VerticalLine />
                      <TextDelete onClick={() => deleteProductFromCart(product._id)}>
                        Excluir
                      </TextDelete>
                    </Actions>
                  </div>
                </ItemContent>
                <PriceItem>R$ {product.product_id.price}</PriceItem>
              </CartItem>
              <HorizontalLine minWidth={100} borderWidth={1} />
              </>
            ))}
          </CartContents>
          <TotalPriceText>
            Pre??o Total({`${products.length} ${products.length <= 1 ? 'item' : 'itens'}`}): 
            <strong> R$ {totalPrice}</strong>
          </TotalPriceText>
          <ButtonContainer>
            <Button onClick={navigateToChooseAddressPage}>Fechar pedido</Button>
          </ButtonContainer>
        </>
      )}

      {!products.length && (
        <EmptyCartText>Carrinho vazio!</EmptyCartText>
      )}
    </Container>
  );
};