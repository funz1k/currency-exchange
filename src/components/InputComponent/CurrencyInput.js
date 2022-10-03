import PropTypes from "prop-types";
import './currencyInput.css';

function CurrencyInput({ amount, onAmountChange, onCurrencyChange, currencies, currency }) {

  const handleChangeAmount = (e) => {
    onAmountChange(e.target.value);
  };

  const handleChangeCurrency = (e) => {
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

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;