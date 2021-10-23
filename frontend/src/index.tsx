import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { SearchContextProvider } from '../src/contexts/searchContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);