import { api } from "../api";

type BodyProductToCart = {
  name: string | undefined,
  price: number | undefined,
  quantity: number,
};

type ProductsResponse = {
  _id: string,
  file_id: {
    filename: string,
  },
  name: string,
  price: number,
  quantity: number,
};

async function AddProductToCartService(
  file_id: string | undefined,
  body: BodyProductToCart, 
  token: string
) {
  await api.post(`/api/v1/cart/add_product/${file_id}`, body, {
    headers: {
      'x-access-token': token
    }
  });
};

async function GetProductsFromCartService(token: string) {
  const { data } = await api.get<ProductsResponse[]>('/api/v1/cart/read_products', {
    headers: {
      'x-access-token': token
    }
  });
  return data;
};

type BodyUpdate = {
  quantity: number,
};

async function UpdateProductFromCartService(token: string, id: string, body: BodyUpdate) {
  await api.put(`/api/v1/cart/update_product/${id}`, body, {
    headers: {
      'x-access-token': token
    }
  })
};

export { 
  AddProductToCartService, 
  GetProductsFromCartService,
  UpdateProductFromCartService
};
export type { ProductsResponse };