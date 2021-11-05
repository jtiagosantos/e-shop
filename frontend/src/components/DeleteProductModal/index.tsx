import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { Container, Modal, TitleModal, IconContainer, Icon } from "./styles";

import { DeleteFileService } from '../../services/FileServices';
import { GetProductsService } from "../../services/ProductServices";
import { DeleteProductService } from "../../services/ProductServices";

import { useModalContext } from "../../hooks/useModalContext";
import { useProductContext } from '../../hooks/useProductContext';
import { useAuthContext } from '../../hooks/useAuthContext';

type DeleteProductModalProps = {
  file_id: string,
  product_id: string | undefined,
};

export default function DeleteProductModal({ 
  file_id, 
  product_id,
}: DeleteProductModalProps): JSX.Element {
  const { setOpenModal } = useModalContext();
  const { setProducts, setIsProductDeleted } = useProductContext();

  const { token } = useAuthContext();

  async function handleDeleteProduct() {
    try {
      await DeleteFileService(file_id, String(token));
      await DeleteProductService(product_id, String(token));
      const data = await GetProductsService();
      setProducts(data);
      setIsProductDeleted(true);
    } catch(_) {
      toast('Faça login para deletar um produto!',
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
  };

  return(
    <Container onClick={() => setOpenModal(false)} >
      <ToastContainer />

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