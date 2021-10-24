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

async function GetProducts() {
  const { data } = await api.get<TypeProduct[]>('api/v1/files');
  return data;
};

async function GetProduct(id: string) {
  const { data } = await api.get<TypeProduct[]>(`api/v1/files/${id}`);
  return data;
};

export { GetProducts, GetProduct };