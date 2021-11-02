import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { SearchContextProvider } from './contexts/SearchContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { ProductContextProvider } from './contexts/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <SearchContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </SearchContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);