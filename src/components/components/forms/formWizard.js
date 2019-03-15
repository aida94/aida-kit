import React, { Component } from 'react';
import { Field } from 'react-final-form';
import Styles from './Styles';
import Wizard from './Wizard';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)
    }
  />
);

class FormWizard extends Component {
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
    };
  }

  render() {
    return (
      <Styles>
      <h2>Wizard Form</h2>
      <Wizard
        initialValues={{ employed: true, stooge: 'larry' }}
        onSubmit={onSubmit}
      >
        <Wizard.Page 
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            return errors;
          }}
          >
          <div>
            <label htmlFor='firstName'>First Name</label>
            <Field
              name='firstName'
              component='input'
              type='text'
              placeholder='First Name'
            />
            <Error name='firstName' />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>

            <Field
              name='lastName'
              component='input'
              type='text'
              placeholder='Last Name'
            />
            <Error name='lastName' />
          </div>
        </Wizard.Page>
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.favoriteColor) {
              errors.favoriteColor = 'Required';
            }
            return errors;
          }}
        >
          <div>
            <label htmlFor='email'>Email</label>

            <Field
              name='email'
              component='input'
              type='email'
              placeholder='Email'
            />
            <Error name='email' />
          </div>
          <div>
            <label htmlFor='favColor'>Favorite Color</label>

            <Field name='favoriteColor' component='select' type='select'>
              <option />
              <option value='#ff0000'>Red</option>
              <option value='#00ff00'> Green</option>
              <option value='#0000ff'> Blue</option>
            </Field>
            <Error name='favoriteColor' />
          </div>
        </Wizard.Page>
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.toppings) {
              errors.toppings = 'Required';
            } else if (values.toppings.length < 2) {
              errors.toppings = 'Choose more';
            }
            return errors;
          }}
        >
          <div>

            <label htmlFor='employed'>Employed?</label>

            <Field name='employed' component='input' type='checkbox' />
          </div>
          <div>
            <label htmlFor='language'>Language</label>

            <Field name='toppings' component='select' multiple type='select'>
              <option value='ham'> Ham</option>
              <option value='mushrooms'> Mushrooms</option>
              <option value='cheese'>Cheese</option>
              <option value='chicken'>Chicken</option>
              <option value='pineapple'>Pinapple</option>
            </Field>
            <Error name='toppings' />
          </div>
        </Wizard.Page>
        <Wizard.Page
          validate={(values) => {
            const errors = {};
            if (!values.notes) {
              errors.notes = 'Required';
            }
            return errors;
          }}
        >
          <div>
            <label>Best Stooge?</label>
            <div>
              <label className='form-check-label' htmlFor='larry'/>

              <label>
                <Field name='stooge' component='input' type='radio' value='larry' />{' '}
                Larry
              </label>
              <label className='form-check-label' htmlFor='moe' />

              <label>
                <Field name='stooge' component='input' type='radio' value='moe' />{' '}
                Moe
              </label>
              <label className='form-check-label' htmlFor='curly' />

              <label>
                <Field name='stooge' component='input' type='radio' value='curly' />{' '}
                Curly
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name='notes' component='textarea' placeholder='Notes' />
            <Error name='notes' />
          </div>
        </Wizard.Page>
      </Wizard>
    </Styles>

      
    );
  }
}
export default FormWizard;
