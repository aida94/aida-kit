import React, { Component } from 'react';
import './buttons.scss';

class Button extends Component {
  render() {
    return (

      <button type='button' className={this.props.className} >
        {this.props.children}
      </button>

    );
  }
}

export default Button;
