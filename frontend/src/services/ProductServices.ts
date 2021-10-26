import { api } from "../api";

export type TypeProduct = {
  _id: string,
  filename: string,
  product_id: {
    name: string,
    price: number,
    inventory: number,
    description: string,
  },
};

async function GetProductsService() {
  const { data } = await api.get<TypeProduct[]>('api/v1/files');
  return data;
};

async function GetProductService(id: string) {
  const { data } = await api.get<TypeProduct[]>(`api/v1/files/${id}`);
  return data;
};

async function AddProductService(body: Object) {
  const { data } = await api.post(`api/v1/create_product`, { body });
  return data;
};

export { GetProductsService, GetProductService, AddProductService };