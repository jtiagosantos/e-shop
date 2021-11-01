import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { SearchContextProvider } from '../src/contexts/searchContext';
import { ModalContextProvider } from '../src/contexts/modalContext';
import { ProductContextProvider } from '../src/contexts/productContext';

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