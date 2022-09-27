import React, { useEffect } from 'react';
import { useState } from 'react';
import { apiCurrency } from 'services/Api';
import { Header } from './Header/Header';
import { Exchange } from './Exchange/Exchange';


const App = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    apiCurrency().then((result) => setCurrency(result))
  }, [])

  return (
    <>
      <Header currency={currency} />
      <Exchange currency={currency} />
    </>

  )
}

export default App;

