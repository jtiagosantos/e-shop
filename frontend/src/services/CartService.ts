import { api } from "../api";

type BodyProductToCart = {
  name: string | undefined,
  price: number | undefined,
  quantity: number,
};

type ProductsResponse = {
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

async function GetProductsFromCart(token: string) {
  const { data } = await api.get<ProductsResponse[]>('/api/v1/cart/read_products', {
    headers: {
      'x-access-token': token
    }
  });
  return data;
};

export { AddProductToCartService, GetProductsFromCart };
export type { ProductsResponse };