import React, { PureComponent } from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import Logo from '../Logo/Logo'
import Currency from '../Currency/Currency'
import Cart from '../Cart/Cart'
import './Header.css'

class Header extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div className="wrapper">
              <div className="wrapper__start">
                <Link className="page" to="/women">
                  WOMEN
                </Link>
                <Link className="page" to="/MEN">
                  MEN
                </Link>
                <Link className="page" to="/KIDS">
                  KIDS
                </Link>
              </div>
              <div className="wrapper__center">
                <Logo />
              </div>
              <div className="wrapper__end">
                <Currency />
                <Cart />
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Header;
