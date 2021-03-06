import { api } from "../api";

export type TypeProduct = {
  _id: string,
  filename: string,
  product_id: {
    _id: string,
    name: string,
    price: number,
    inventory: number,
    description: string,
  },
};

type BodyProduct = {
  name: string,
  price: number,
  inventory: number,
  description: string,
};

type ResponseAddProduct = {
  _id: string,
};

async function GetProductsService() {
  const { data } = await api.get<TypeProduct[]>('api/v1/files');
  return data;
};

async function GetProductService(id: string) {
  const { data } = await api.get<TypeProduct[]>(`api/v1/files/${id}`);
  return data;
};

async function AddProductService(body: BodyProduct, token: string) {
  const { data } = await api.post<ResponseAddProduct>(`api/v1/create_product`, body, {
    headers: {
      'x-access-token': token
    }
  });
  return data;
};

async function DeleteProductService(product_id: string | undefined, token: string) {
  await api.delete(`api/v1/delete_product/${product_id}`, {
    headers: {
      'x-access-token': token
    }
  });
};

async function UpdateProductService(product_id: string, body: Object, token: string) {
  await api.put(`api/v1/update_product/${product_id}`, body, {
    headers: {
      'x-access-token': token
    }
  });
};

export { 
  GetProductsService, 
  GetProductService, 
  AddProductService,
  DeleteProductService,
  UpdateProductService
};