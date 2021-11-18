import { api } from "../api";

type BodyProductToCart = {
  product_id: string | undefined,
  quantity: number,
};

type ProductsResponse = {
  _id: string,
  file_id: {
    filename: string,
  },
  product_id: {
    name: string,
    price: number,
  }
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

async function GetTotalPriceCartService(token: string): Promise<number> {
  const { data } = await api.get('api/v1/cart/resume', {
    headers: {
      'x-access-token': token
    }
  });
  return Number(data);
}

async function DeleteProductFromCartService(token: string, id: string) {
  await api.delete(`api/v1/cart/delete_product/${id}`, {
    headers: {
      'x-access-token': token
    }
  });
}

export { 
  AddProductToCartService, 
  GetProductsFromCartService,
  UpdateProductFromCartService,
  GetTotalPriceCartService,
  DeleteProductFromCartService
};
export type { ProductsResponse };