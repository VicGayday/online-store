import React, { Component } from 'react';
import logo from './logo.png'
import './Logo.css'

class Logo extends Component {
  render() {
    return (
      <img alt="logo" src={logo} className="logo"></img>
    );
  }
}

export default Logo;
