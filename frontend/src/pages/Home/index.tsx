import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { GetProductsService, TypeProduct } from '../../services/ProductServices';

import Navbar from "../../components/Navbar";
import ProductCard from '../../components/ProductCard';

import { ProductContainer, Message } from './styles';

import { useSearchContext } from '../../hooks/useSearchContext';
import { useProductContext } from '../../hooks/useProductContext';

export default function Home(): JSX.Element {
  const [wantedProducts, setWantedProducts] = useState<TypeProduct[]>([])
  
  const { search } = useSearchContext();
  const { 
    products, 
    setProducts, 
    isProductDeleted, 
    setIsProductDeleted 
  } = useProductContext();

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

  useEffect(() => {
    if(isProductDeleted) {
      toast('Produto deletado com sucesso!',
        {
          position: "top-right",
          style: {
            borderRadius: '8px',
            background: '#7bcc39',
            color: '#fff',
          },
        }
      );
      setIsProductDeleted(false);
    }
  }, [isProductDeleted]);

  return(
    <>
      <ToastContainer />
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