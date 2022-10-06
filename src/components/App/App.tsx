/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import useFetch from '../../hooks/useFetch';
import { LineWave } from 'react-loader-spinner';
import CurrencyInput from "../InputComponent";
import Header from '../Header';
import Container from '../Container';


const App: React.FC = () => {

  const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('UAH');
  const [currencyTo, setCurrencyTo] = useState('USD');

  const { status, rates } = useFetch(url);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmountFromChange(1);
      }
      init();
    }
  }, [rates]);


  function format(number: number): any {
    return number.toFixed(2);
  }

  function handleAmountFromChange(amountFrom: number) {
    setAmountTo(format(amountFrom / rates[currencyTo] * rates[currencyFrom]));
    setAmountFrom(amountFrom);
  }

  function handleCurrencyFromChange(currencyFrom: string) {
    setAmountTo(format(amountFrom / rates[currencyTo] * rates[currencyFrom]));
    setCurrencyFrom(currencyFrom);
  }

  function handleAmountToChange(amountTo: number) {
    setAmountFrom(format(amountTo / rates[currencyFrom] * rates[currencyTo]));
    setAmountTo(amountTo);
  }

  function handleCurrencyToChange(currencyTo: string) {
    setAmountFrom(format(amountTo / rates[currencyFrom] * rates[currencyTo]));
    setCurrencyTo(currencyTo);
  }


  return (
    <div>
      <Header currencies={rates} />
      <Container title='Currency Converter'>
        {status === 'fetched'
          ? <>
            <CurrencyInput
              onAmountChange={handleAmountFromChange}
              onCurrencyChange={handleCurrencyFromChange}
              currencies={Object.keys(rates)}
              amount={amountFrom}
              currency={currencyFrom} />
            <CurrencyInput
              onAmountChange={handleAmountToChange}
              onCurrencyChange={handleCurrencyToChange}
              currencies={Object.keys(rates)}
              amount={amountTo}
              currency={currencyTo} />
          </>
          : (<LineWave width="300" height="200" color="#fff" />)}
      </Container>
    </div>
  );
}

export default App;



