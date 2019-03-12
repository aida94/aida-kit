import React, { Component } from 'react';

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      email: '',
      password: '', 
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value },
      () => { this.validateField(name, value); });
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { emailValid } = this.state;
    let { passwordValid } = this.state;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({ formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    const hide = this.state.show ? 'd-block' : 'd-none';

    // eslint-disable-next-line no-alert
    const handleSubmit = () => alert(`email: ${this.state.email} \npassword: ${this.state.password}`);

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

              <form>
                <div className='modal-body'>
                  <h2>Sign up</h2>

                  <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor='email' className='col-form-label'>Email</label>
                    <input type='email' name='email' className='form-control' id='email' value={this.state.email} onBlur={this.handleInputBlur} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.email.length > 0 && (
                      <div className='formErrors'>
                        <p>email is invalid</p>
                      </div> 
                    )}
                  </div>
                  <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor='password' className='col-form-label'>Password</label>
                    <input type='password' name='password' className='form-control' id='password' value={this.state.password} onBlur={this.handleInputBlur} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.password.length > 0 && (
                      <div className='formErrors'>
                        <p>password is short</p>
                      </div> 
                    )}
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={handleHide}>Close</button>
                  <button type='button' className='btn btn-primary text-white' disabled={!this.state.formValid} onClick={handleSubmit}>Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormModal;
