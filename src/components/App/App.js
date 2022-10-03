import './App.css';
import CurrencyInput from "../InputComponent";
import Header from '../Header/Header';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI')
      .then(({ data }) => {
        const result = {
          UAH: data.rates.UAH,
          USD: data.rates.USD,
          EUR: data.rates.EUR
        }
        setRates(result)
      })
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmountFromChange(1);
      }
      init();
    }
  }, [rates]);



  function format(number) {
    return number.toFixed(3);
  }

  function handleAmountFromChange(amountFrom) {
    setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom]));
    setAmountFrom(amountFrom);
  }

  function handleCurrencyFromChange(currencyFrom) {
    setAmountTo(format(amountFrom * rates[currencyTo] / rates[currencyFrom]));
    setCurrencyFrom(currencyFrom);
  }

  function handleAmountToChange(amount2) {
    setAmountFrom(format(amount2 * rates[currencyFrom] / rates[currencyTo]));
    setAmountTo(amount2);
  }

  function handleCurrencyToChange(currencyTo) {
    setAmountFrom(format(amountTo * rates[currencyFrom] / rates[currencyTo]));
    setCurrencyTo(currencyTo);
  }


  return (
    <div>
      <Header currencies={rates} />
      <h1>Currency Converter</h1>
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
    </div>
  );
}

export default App;
