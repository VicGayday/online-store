import React, { Component } from 'react';
// import dollar from './dollar.png'
import './Currency.css'

class Currency extends Component {
  render() {
    return (
      <select className="currency-change">
        <option value=""></option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
    );
  }
}

export default Currency;
