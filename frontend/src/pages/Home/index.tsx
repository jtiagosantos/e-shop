import { useState, useEffect } from 'react';

import { GetProductsService, TypeProduct } from '../../services/ProductServices';

import Navbar from "../../components/Navbar";
import ProductCard from '../../components/ProductCard';

import { ProductContainer, Message } from './styles';

import { useSearchContext } from '../../hooks/useSearchContext';
import { useProductContext } from '../../hooks/useProductContext';

export default function Home(): JSX.Element {
  const [wantedProducts, setWantedProducts] = useState<TypeProduct[]>([])
  
  const { search } = useSearchContext();
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    async function fetchProductsData() {
      const data = await GetProductsService();
      setProducts(data)
    }

    fetchProductsData();

    return () => {
      fetchProductsData();
    }
  }, []);

  useEffect(() => {
    setWantedProducts(products.filter(product => (
      product.product_id.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )));
  }, [search]);

  return(
    <>
      <Navbar />

      {products.length > 0 ? (
        <ProductContainer>
          {search === '' ? (
            products?.map(product => (
              <ProductCard 
                id={product._id}
                key={product._id}
                filename={product.filename}
                product_id={product.product_id}
              />
            ))
          ) : (
            wantedProducts?.map(product => (
              <ProductCard 
                id={product._id}
                key={product._id}
                filename={product.filename}
                product_id={product.product_id}
              />
            ))
          )}
        </ProductContainer>
      ) : (
        <Message>Sem produtos à venda!</Message>
      )}
    </>
  );
};