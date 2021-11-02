import { Container, Modal, TitleModal, IconContainer, Icon } from "./styles";

import { DeleteFileService } from '../../services/FileServices';
import { GetProductsService } from "../../services/ProductServices";
import { DeleteProductService } from "../../services/ProductServices";

import { useModalContext } from "../../hooks/useModalContext";
import { useProductContext } from '../../hooks/useProductContext';

type DeleteProductModalProps = {
  file_id: string,
  product_id: string | undefined
};

export default function DeleteProductModal({ 
  file_id, 
  product_id 
}: DeleteProductModalProps): JSX.Element {
  const { setOpenModal } = useModalContext();
  const { setProducts } = useProductContext();

  async function handleDeleteProduct() {
    await DeleteFileService(file_id);
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