import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { SearchContextProvider } from './contexts/SearchContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { ProductContextProvider } from './contexts/ProductContext';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <SearchContextProvider>
          <ModalContextProvider>
            <App />
          </ModalContextProvider>
        </SearchContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);