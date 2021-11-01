import { useEffect } from "react";

import { Container, Modal, TitleModal, IconContainer, Icon } from "./styles";

import { DeleteProductService } from '../../services/ProductServices';
import { GetProductsService } from "../../services/ProductServices";

import { useModalContext } from "../../hooks/useModalContext";
import { useProductContext } from '../../hooks/useProductContext';

type DeleteProductModalProps = {
  product_id: string,
};

export default function DeleteProductModal({ product_id }: DeleteProductModalProps): JSX.Element {
  const { setOpenModal } = useModalContext();
  const { setProducts } = useProductContext();

  async function handleDeleteProduct() {
    await DeleteProductService(product_id);
    const data = await GetProductsService();
    setProducts(data);
  };

  return(
    <Container onClick={() => setOpenModal(false)} >
      <Modal>
        <TitleModal>Você realmente deseja remover este produto?</TitleModal>
        <IconContainer>
          <Icon className='fas fa-check-circle' 
            onClick={handleDeleteProduct} 
          />
          <Icon className='fas fa-arrow-circle-left' 
            onClick={() => setOpenModal(false)} 
          />
        </IconContainer>
      </Modal>
    </Container>
  );
};