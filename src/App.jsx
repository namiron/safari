import React from 'react';

import Ways from './components/routes/Ways';
import './null.scss';
import './wrapper.scss';

import { useCustomProductList, useExportAllProducts } from './hooks/untils';



const App = () => {

  useExportAllProducts()

  const [isLoading, productList, error] = useCustomProductList()

  console.log('customList:', productList);
  return (
    <div className="wrapper">
      <Ways />
    </div>
  );
}

export default App;
