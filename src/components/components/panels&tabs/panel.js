import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      minimum: false,
    };

    this.handleHide = this.handleHide.bind(this);
    this.handleMinimum = this.handleMinimum.bind(this);
  }

  handleHide() {
    this.setState({ hide: true });
  }

  handleMinimum() {
    this.setState({ minimum: !this.state.minimum });
  }

  render() {
    const hide = this.state.hide ? 'd-none' : '';
    const minimum = this.state.minimum ? 'd-none' : '';
    return (
      <div className={`${this.props.classDiv} ${hide}`}>
        <div className={this.props.classHeader}>
          <p className='pt-2'> {this.props.headerText}
            <span className='float-right'>
              <i className='fa fa-minus mr-3' onClick={this.handleMinimum}></i>
              <i className='fa fa-times mr-3' onClick={this.handleHide}></i>
            </span>
          </p>
        </div>
        <div className={`${this.props.classBody} ${minimum} `}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;
