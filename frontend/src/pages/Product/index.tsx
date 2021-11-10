import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { GetProductService } from '../../services/ProductServices';
import { TypeProduct } from '../../services/ProductServices';
import { AddProductToCartService } from '../../services/CartService';

import Navbar from '../../components/Navbar';
import DeleteProductModal from '../../components/DeleteProductModal';

import { useModalContext } from '../../hooks/useModalContext';
import { useProductContext } from '../../hooks/useProductContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { 
  Container,
  ImageContainer,
  InfoContainer,
  ProductImage,
  ProductContainer,
  ProductName,
  ProductPrice,
  InventoryMessage,
  Inventory,
  Button,
  TitleButton,
  TopProductContainer,
  BottomProductContainer,
  TitleDescription,
  Description,
  IconContainer,
  Icon
} from './styles';

type ProductProps = {
  match: {
    params: {
      id: string,
    }
  }
}

export default function Product({ match }: ProductProps): JSX.Element {
  const [product, setProduct] = useState<TypeProduct>();
  const [image, setImage] = useState('');

  const { params: { id } } = match;

  const { openModal, setOpenModal } = useModalContext();
  const { isProductDeleted,isProductUpdated, setIsProductUpdated } = useProductContext();
  const { token } = useAuthContext();

  const history = useHistory();

  useEffect(() => {
    async function fetchProductData() {
      const data = await GetProductService(id);

      if(data.length) {
        setProduct(data[0]);
        setImage(require(`../../../../backend/public/uploads/${data[0].filename}`).default);
      }
    };

    fetchProductData();

    return () => {
      fetchProductData();
    }
  }, []);

  useEffect(() => {
    if(isProductUpdated) {
      toast('Produto atualizado com sucesso!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
      setIsProductUpdated(false);
    }
  }, [isProductUpdated]);

  function navigateToProductUpdatePage() {
    history.push(`/update_product/${id}/${product?.product_id._id}`);
  };

  async function addProductToCart() {
    if(token) {
      try {
        await AddProductToCartService(product?._id, {
          name: product?.product_id.name,
          price: product?.product_id.price,
          quantity: 1
        }, String(token))
  
        toast('Produto adicionado com sucesso!',
          {
            position: "top-right",
            style: {
              borderRadius: '8px',
              background: '#7bcc39',
              color: '#fff',
            },
          }
        );
      } catch(error:any) {
        console.log(error);
      }
    }else {
      toast('Faça login para adicionar ao carrinho!',
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
  }

  return(
   <Container>
     <ToastContainer />
     
      {openModal && <DeleteProductModal 
                      file_id={id}
                      product_id={product?.product_id._id}
                    />
      }

      {isProductDeleted && <Redirect to='/' />}

      <Navbar />
      <ProductContainer>
        <TopProductContainer>
          <ImageContainer>
              <ProductImage 
                src={image} 
              />
          </ImageContainer>  
          <InfoContainer>
            <div>
              <ProductName>{product?.product_id.name}</ProductName>
              <ProductPrice>R$ {product?.product_id.price}</ProductPrice>
            </div>
            <div>
            {product?.product_id.inventory ? (
              <>
                <InventoryMessage 
                  color='rgba(99, 189, 84, 0.8)'
                >
                  Estoque disponível!
                </InventoryMessage>
                <Inventory weight='500'>Quantidade: </Inventory>
                <Inventory weight='normal'>{product?.product_id.inventory}</Inventory>
              </>
            ) : (
              <InventoryMessage 
                color='rgba(219, 86, 78, 0.8)'
              >
                Estoque indisponível!
              </InventoryMessage>
            )}
            </div>
            <Button 
              typeCursor={product?.product_id.inventory ? 'pointer' : 'not-allowed'}
            >
              <TitleButton onClick={addProductToCart}>
                Adicionar ao carrinho
              </TitleButton>
            </Button>
          </InfoContainer>
        </TopProductContainer>

        <BottomProductContainer>
          <TitleDescription>Detalhes do produto</TitleDescription>
          <Description>{product?.product_id.description}</Description>
        </BottomProductContainer>

        <IconContainer>
          <Icon className='far fa-trash-alt' onClick={() => setOpenModal(true)} />
          <Icon className='far fa-edit' onClick={navigateToProductUpdatePage} />
        </IconContainer>
      </ProductContainer>
   </Container>
  );
};