import React, { Component } from 'react';
import './alerts.scss';
import Button from '../buttons/button';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    const handleHide = () => this.setState({ show: true });
    const handleShow = () => this.setState({ show: false });

    return (

      <div>
        <p className={`${this.props.className}`} role='alert' hidden={this.state.show ? 'hidden' : ''} >
          {this.props.children}
          <button type='button' className='close' data-dismiss='alert' aria-label='Close' onClick={handleHide}>
            <span aria-hidden='true'>&times;</span>
          </button>
          
        </p>
        {this.state.show && <p onClick={handleShow}> <Button className='btn text-white bg-primary'>Show Alert</Button></p>}
      </div>

    );
  }
}

export default Alert;
