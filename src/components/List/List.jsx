import React from "react";
import "./List.css";
import { useQueryGetAllProducts } from '../../query'

const List = () => {
  const { loading, error, products } = useQueryGetAllProducts();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>We have a problem: {error.message}</p>;
  }
  const currencyPrice = (arr, currency) => {
    const obj = arr.find((item) => item.currency === currency);
    return `${currency} ${obj.amount}`;
  };

  return (
    <div className="container">
      {products.map((item) => (
        <div key={item.id} className="item">
          <div className="column">
            <img className="img-list" src={item.gallery[0]} alt={item.id} />
            <h3 className="product">{item.name}</h3>
            <div className="price">{currencyPrice(item.prices, "USD")}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
