import { useState, useEffect } from 'react';

import { GetProductService } from '../../services/ProductServices';
import { TypeProduct } from '../../services/ProductServices';

import Navbar from '../../components/Navbar';
import DeleteProductModal from '../../components/DeleteProductModal';

import { useModalContext } from '../../hooks/useModalContext';

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

  return(
   <Container>
      {openModal && <DeleteProductModal product_id={id} />}
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
              <TitleButton>Adicionar ao carrinho</TitleButton>
            </Button>
          </InfoContainer>
        </TopProductContainer>

        <BottomProductContainer>
          <TitleDescription>Detalhes do produto</TitleDescription>
          <Description>{product?.product_id.description}</Description>
        </BottomProductContainer>

        <IconContainer>
          <Icon className='far fa-trash-alt' onClick={() => setOpenModal(true)} />
          <Icon className='far fa-edit' />
        </IconContainer>
      </ProductContainer>
   </Container>
  );
};