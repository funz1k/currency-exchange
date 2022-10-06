import React from 'react';
import './currencyInput.css';

type IProp = {
  amount: number;
  onAmountChange: (e: number) => void;
  onCurrencyChange: (e: string) => void;
  currencies: string[];
  currency: string
}

const CurrencyInput: React.FC<IProp> = ({ amount, onAmountChange, onCurrencyChange, currencies, currency }) => {

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      e.target.value = '0'
    }
    const amountCurr = parseInt(e.target.value)
    onAmountChange(amountCurr);
  };

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(e.target.value);
  };


  return (
    <div className="group">
      <input type="text" value={amount} onChange={handleChangeAmount} />
      <select value={currency} onChange={handleChangeCurrency}>
        {currencies.map(((currency, index) => (
          <option key={index} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

export default CurrencyInput;