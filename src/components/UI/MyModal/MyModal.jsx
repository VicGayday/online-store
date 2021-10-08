import React, { Component } from 'react'
import classes from './MyModal.module.css'

class MyModal extends Component {
  render() {
const { children, visible, setVisible } = this.props
    const rootClasses = [classes.myModal];

    if (visible) {
      rootClasses.push(classes.active);
    }
    return (
      <div className={rootClasses.join(' ')} onClick = {() => { setVisible(!visible)}}>
        <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }
}

export default MyModal;
