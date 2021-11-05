import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

import { TypeProduct } from '../services/ProductServices';

type TypeProductContext = {
  products: TypeProduct[],
  setProducts: Dispatch<SetStateAction<TypeProduct[]>>,
  isProductDeleted: boolean,
  setIsProductDeleted: Dispatch<SetStateAction<boolean>>,
  isProductUpdated: boolean,
  setIsProductUpdated: Dispatch<SetStateAction<boolean>>,
};

export const ProductContext = createContext({} as TypeProductContext);

type ProductContextProviderProps = {
  children: ReactNode,
};

export function ProductContextProvider({ children }: ProductContextProviderProps): JSX.Element {
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  
  return(
    <ProductContext.Provider value={{ 
      products, 
      setProducts,
      isProductDeleted,
      setIsProductDeleted,
      isProductUpdated,
      setIsProductUpdated
    }}>
      {children}
    </ProductContext.Provider>
  );
};