import React, { Component } from 'react';


class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '', 
      favColor: '',
      employed: '',
      language: [],
      stooge: '',
      notes: '',

      formErrors: { 
        firstName: '',
        lastName: '',
        email: '', 
        favColor: '',
        language: '',
        notes: '' },

      firstNameValid: false,
      lastNameValid: false,
      emailValid: false, 
      favColorValid: false,
      languageValid: false,
      notesValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const { name } = e.target;
    let value;

    if (e.target.type === 'select-multiple') {
      value = Array.from(e.target.selectedOptions, option => option.value);
    } else {
      value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    }

    this.setState({ [name]: value },

      () => { this.validateField(name, value); });
  }


  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let { firstNameValid } = this.state;
    let { lastNameValid } = this.state;
    let { emailValid } = this.state;
    let { favColorValid } = this.state;
    let { languageValid } = this.state;
    let { notesValid } = this.state;

    switch (fieldName) {
      case 'firstName':
        firstNameValid = value.length > 0;
        fieldValidationErrors.firstName = firstNameValid ? '' : ' Required';
        break;
      case 'lastName':
        lastNameValid = value.length > 0;
        fieldValidationErrors.lastName = lastNameValid ? '' : ' Required';
        break;
      case 'email':
        if (!value.length > 0) {
          fieldValidationErrors.email = ' Required';
        } else {
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : 'Invalid';
        }
        break;
      case 'favColor':
        favColorValid = value.length > 0;
        fieldValidationErrors.favColor = favColorValid ? '' : ' Required';
        break;  
      case 'language':
        languageValid = value.length > 0;
        fieldValidationErrors.language = languageValid ? '' : ' Required';
        break;
      case 'notes':
        notesValid = value.length > 0;
        fieldValidationErrors.notes = notesValid ? '' : ' Required';
        break;

      default:
        break;
    }
    this.setState({ formErrors: fieldValidationErrors,
      firstNameValid, 
      lastNameValid, 
      emailValid, 
      favColorValid,
      languageValid,
      notesValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.firstNameValid && this.state.lastNameValid && this.state.emailValid && this.state.favColorValid && this.state.languageValid && this.state.notesValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    const submitdata = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email, 
      favColor: this.state.favColor,
      employed: this.state.employed,
      language: this.state.language,
      stooge: this.state.stooge,
      notes: this.state.notes,
    };

    // eslint-disable-next-line no-alert
    const handleSubmit = () => (this.state.formValid ? alert(JSON.stringify(submitdata, null, 2)) : alert('Invalid Form'));

    return (
      <React.Fragment>
        <div className='border rounded m-sm-2 p-1 p-sm-4'>

            <form onSubmit={handleSubmit}>
              <div>
                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.firstName)}`}>
                    <label htmlFor='firstName' className='col-sm-3 col-form-label'>First Name</label>
                    <input type='text' name='firstName' className='col-sm-6 form-control' id='firstName' onBlur={this.handleUserInput} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.firstName.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.firstName}</p>
                      </div> 
                    )}

                </div>

                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.lastName)}`}>
                    <label htmlFor='lastName' className='col-sm-3 col-form-label'>Last Name</label>
                    <input type='text' name='lastName' className='col-sm-6 form-control' id='lastName' onBlur={this.handleUserInput} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.lastName.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.lastName}</p>
                      </div> 
                    )}
                </div>
              </div>

              <div>
                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor='email' className='col-sm-3 col-form-label'>Email</label>
                    <input type='email' name='email' className='col-sm-6 form-control' id='email2' onBlur={this.handleUserInput} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.email.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.email}</p>
                      </div> 
                    )}
                </div>

                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.favColor)}`}>
                    <label htmlFor='favcolor' className='col-sm-3 col-form-label'>Favorite Color</label>
                    <select name='favColor' className='col-sm-6 form-control' id='favColor' onBlur={this.handleUserInput} onChange={this.handleUserInput} required>
                        <option defaultValue></option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                    {this.state.formErrors.favColor.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.favColor}</p>
                      </div> 
                    )}
                </div>
              </div>

              <div>
                <div className='form-group row p-3'>
                    <label htmlFor='employed' className='col-sm-3 col-form-label'>Employed?</label>
                    <input name='employed' type='checkbox' className='' id='employed' onBlur={this.handleUserInput} onChange={this.handleUserInput} required/> 
                </div>

                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.language)}`}>
                    <label htmlFor='language' className='col-sm-3 col-form-label'>Language</label>
                    <select multiple name='language' className='col-sm-6 form-control' id='language' onBlur={this.handleUserInput} onChange={this.handleUserInput} required>
                        <option value='english'>English</option>
                        <option value='italian'>Italian</option>
                        <option value='french'>French</option>
                        <option value='russian'>Russian</option>
                    </select>
                    {this.state.formErrors.language.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.language}</p>
                      </div> 
                    )}
                </div>
              </div>

              <div>
                <div className='form-group row p-3'>
                    <label className='col-sm-3 col-form-label'>Best Stooge?</label>
                    <div className='col-sm-6'>
                        <input type='radio' name='stooge' id='larry' value='larry' onBlur={this.handleUserInput} onChange={this.handleUserInput} />
                        <label htmlFor='larry'>Larry</label> <br/>
                        
                        <input type='radio' name='stooge' id='moe' value='moe' onBlur={this.handleUserInput} onChange={this.handleUserInput} />
                        <label htmlFor='moe'>Moe</label> <br/>

                        <input type='radio' name='stooge' id='curly' value='curly' onBlur={this.handleUserInput} onChange={this.handleUserInput} />
                        <label htmlFor='curly'>Curly</label> <br/>
                    </div>
                </div>

                <div className={`form-group row p-3 ${this.errorClass(this.state.formErrors.notes)}`}>
                    <label htmlFor='notes' className='col-sm-3 col-form-label'>Notes</label>
                    <textarea name='notes' className='col-sm-6 form-control' id='tnotes' rows='3' onBlur={this.handleUserInput} onChange={this.handleUserInput} required/>
                    {this.state.formErrors.notes.length > 0 && (
                      <div className='formErrors'>
                        <p>{this.state.formErrors.notes}</p>
                      </div> 
                    )}
                </div>
              </div>

              <button type='button' className='btn btn-secondary mr-2'>« Previous</button>
              <button type='submit' className='btn btn-primary text-white mr-2'>Next »</button>
              <button type='submit' className='btn btn-primary text-white' disabled={!this.state.formValid}> Submit </button>

              <pre className='preForm m-2 p-2'>
                { JSON.stringify(submitdata, null, 2) }
              </pre>

            </form>

        </div>
        
      </React.Fragment>
    );
  }
}
export default WizardForm;
