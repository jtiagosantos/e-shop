import { useState, useEffect } from 'react';

import { GetProducts, TypeProduct } from '../../services/ProductServices';

import Navbar from "../../components/Navbar";
import ProductCard from '../../components/ProductCard';

import { ProductContainer, Message } from './styles';

export default function Home(): JSX.Element {
  const [products, setProducts] = useState<TypeProduct[]>([]);

  useEffect(() => {
    async function fetchProductsData() {
      const data = await GetProducts();
      console.log(data);
      setProducts(data)
    }

    fetchProductsData();

    return () => {
      fetchProductsData();
    }
  }, []);

  return(
    <>
      <Navbar />

      {products.length > 0 ? (
        <ProductContainer>
          {products?.map(product => (
            <ProductCard 
              filename={product.filename}
              product_id={product.product_id}
            />
          ))}
        </ProductContainer>
      ) : (
        <Message>Sem produtos à venda!</Message>
      )}
    </>
  );
};