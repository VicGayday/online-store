import React from 'react';
import { useQueryGetCurrency } from '../../query'
import './Currency.css'

const Currency  = () => {

  const { loading, error, currency } = useQueryGetCurrency()
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>We have a problem: {error.message}</p>
  }

  const options = currency.map((item) => {
    switch (item) {
      case "USD":
        return { value: "\u0024", name: item };
      case "EUR":
        return { value: "\u20AC", name: item };
      case "GBP":
        return { value: "\uFFE1", name: item };
      case "AUD":
        return { value: "\u0024", name: item };
      case "JPY":
        return { value: "\u00A5", name: item };
      case "RUB":
        return { value: "\u20BD", name: item };
      default:
        return { value: item, name: item };
    }
  });

    return (
      <select className="currency-change">
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.value} {item.name}
            </option>
          );
        })}
      </select>
    );
  }


export default Currency;
