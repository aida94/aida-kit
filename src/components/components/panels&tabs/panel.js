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
      <div className={`col-md-6 mb-5 ${hide}`}>
        <div className={this.props.classHeader}>
          <p className='pt-2'>Default Panels 
            <span className='float-right'>
              <i className='fa fa-minus mr-3' onClick={this.handleMinimum}></i>
              <i className='fa fa-times mr-3' onClick={this.handleHide}></i>
            </span>
          </p>
        </div>
        <div className={`bg-white rounded-bottom p-2 mr-md-4 ${minimum} `}>
          <p className=''>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
        </div>
      </div>
    );
  }
}

export default Panel;
