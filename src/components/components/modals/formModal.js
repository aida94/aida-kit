import React, { Component } from 'react';

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      email: '',
      password: '', 
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    // eslint-disable-next-line no-alert
    const handleSubmit = () => alert(JSON.stringify(this.state));

    const hide = this.state.show ? 'd-block' : 'd-none';

    return (

      <div>
        <button type='button' className='btn text-white btn-primary' data-toggle='modal' data-target='#exampleModal' onClick={handleShow}>
          Launch modal
        </button>
        
        <div className={`modal mt-5 ${hide}`} id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>Sign in </h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={handleHide}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor='email' className='col-form-label'>Email</label>
                  <input type='email' name='email' className='form-control' id='email' onChange={this.handleInputChange}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='password' className='col-form-label'>Password</label>
                  <input type='password' name='password' className='form-control' id='password' onChange={this.handleInputChange}/>
                </div>
              </form>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={handleHide}>Close</button>
                <button type='button' className='btn btn-primary text-white' onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FormModal;
