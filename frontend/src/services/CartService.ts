import { api } from "../api";

type BodyProductToCart = {
  name: string | undefined,
  price: number | undefined,
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

export { AddProductToCartService };