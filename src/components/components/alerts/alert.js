import React, { Component } from 'react';

class Alert extends Component {

  render() {

    return (
        <div className={this.props.class} role="alert">
            {this.props.children}
        </div>
    );
  }
}

export default Alert;