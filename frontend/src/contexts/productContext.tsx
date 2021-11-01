import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { TypeProduct } from '../services/ProductServices';

type TypeProductContext = {
  products: TypeProduct[],
  setProducts: Dispatch<SetStateAction<TypeProduct[]>>
};

export const ProductContext = createContext({} as TypeProductContext);

type ProductContextProviderProps = {
  children: ReactNode,
};

export function ProductContextProvider({ children }: ProductContextProviderProps): JSX.Element {
  const [products, setProducts] = useState<TypeProduct[]>([]);
  
  return(
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};