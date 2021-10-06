import React, { Component } from 'react';
import './Currency.css'
// import dollar from './dollar.png'

class Currency extends Component {
  render() {
    return (
      <select className="currency-change">
        <option>USD</option>
        <option>EUR</option>
        <option>JPY</option>
      </select>
    );
  }
}

export default Currency;
