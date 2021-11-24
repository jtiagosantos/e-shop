import { useState, useEffect, useCallback } from 'react';

import { useModalContext } from '../../hooks/useModalContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { GetAdressesService } from '../../services/AddressServices';
import { DeleteAddresService } from '../../services/AddressServices';

import Navbar from '../../components/Navbar';
import AddAddressModal from '../../components/AddAddressModal';

import { 
  Container, 
  TopAddress, 
  TitleTopAddress,
  HorizontalLine,
  AddAddressButton,
  Addresses,
  ButtonContainer,
  Button,
  DeleteText,
  EmptyCartText
} from './styles';

type AddressResponse = {
  _id: string,
  logradouro: string,
  numero: number,
  bairro: string,
  cidade: string,
  uf: string,
  cep: number,
};

export default function Address(): JSX.Element {
  const [addresses, setAddresses] = useState<AddressResponse[]>([]);

  const { openModal, setOpenModal } = useModalContext();
  const { token } = useAuthContext();

  const GetAddresses = useCallback(async () => {
    const data = await GetAdressesService(String(token));
      setAddresses(data);
  }, [token]);

  useEffect(() => {
    GetAddresses();
  }, [openModal, GetAddresses]);

  async function handleDeleteAddress(id: string) {
    try {
      await DeleteAddresService(id, String(token));
      GetAddresses();
    } catch(error) {
      console.log(error);
    }
  };

  return(
    <Container>
      {openModal && <AddAddressModal />}

      <Navbar showOnlyTitle={true} />

      <TopAddress>
        <TitleTopAddress fontSize={30}>Escolha o seu endereço</TitleTopAddress>
        <AddAddressButton onClick={() => setOpenModal(true)}>+ Endereço</AddAddressButton>
      </TopAddress>
      <HorizontalLine />

      {addresses.length ? (
        <Addresses>
        {addresses.map(address => (
          <div key={address._id}>
            <div className="custom-control custom-radio">
              <input 
                type="radio" 
                id={address._id} 
                name="customRadio" 
                className="custom-control-input" 
                checked 
                value={`${address.logradouro} - ${address.numero}, ${address.bairro}, ${address.cidade}/${address.uf}`}
              />
              <label className="custom-control-label" htmlFor={address._id}>
                {`${address.logradouro} - ${address.numero}, ${address.bairro}, ${address.cidade}/${address.uf}`}
              </label>
            </div>
            <DeleteText onClick={() => handleDeleteAddress(address._id)}>
              Excluir
            </DeleteText>
          </div>
        ))}
      </Addresses>
      ) : (
        <EmptyCartText>Sem endereços cadastrados!</EmptyCartText>
      )}

      {!!addresses.length && 
      <ButtonContainer>
        <Button>Seguinte</Button>
      </ButtonContainer>}
    </Container>
  );
};