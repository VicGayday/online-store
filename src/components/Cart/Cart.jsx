import React, { Component } from 'react'
import MyModal from '../UI/MyModal/MyModal'
import './Cart.css'


class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false
    }
    this.onClick = () => {
      this.setState(s =>({ isShown: !s.isShown}))
    }
  }
  render() {
    return (
      <div>
        <button type="button" className="cart" onClick={this.onClick}></button>
        {this.state.isShown && (
          <MyModal visible={true} setVisible={this.onClick}>
            <div className="bag-title">
              <span>My Bag,</span> 2 items
            </div>
            <div>Here will be the goods</div>
            <div className="total-amount-container">
              <div className="total">Total</div>
              <div className="total-amount">100 usd</div>
            </div>
            <div className="button-container">
              <button type="button" className="gotobag">
                VIEW BAG
              </button>
              <button type="button" className="gotopay">
                CHECK OUT
              </button>
            </div>
          </MyModal>
        )}
      </div>
    );
  }
}

export default Cart;
