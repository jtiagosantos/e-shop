import { api } from "../api"

type Address = {
  logradouro: string,
  numero: number,
  bairro: string,
  cidade: string,
  uf: string,
  cep: number,
};

type AddressResponse = Address & {
  _id: string,
};

async function AddAddressService(body: Address, token: string) {
  await api.post('api/v1/address/new', body, {
    headers: {
      'x-access-token': token
    }
  });
};

async function GetAdressesService(token: string) {
  const { data } = await api.get<AddressResponse[]>('api/v1/address/index', {
    headers: {
      'x-access-token': token
    }
  })

  return data;
};

async function DeleteAddresService(id: string, token: string) {
  await api.delete(`/api/v1/address/delete/${id}`, {
    headers: {
      'x-access-token': token
    }
  })
};

export { 
  AddAddressService, 
  GetAdressesService, 
  DeleteAddresService 
};