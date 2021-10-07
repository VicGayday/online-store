import React, { Component } from 'react'
import MyModal from '../UI/MyModal/MyModal'


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
        <button type="button" onClick={this.onClick}>
          Cart
        </button>
        {this.state.isShown && (
          <MyModal visible={true} setVisible={this.setState}>
            <div>here will be the cart filling</div>
            <button type="button">VIEW BAG</button>
            <button type="button">CHECK OUT</button>
          </MyModal>
        )}
      </div>
    );
  }
}

export default Cart;
