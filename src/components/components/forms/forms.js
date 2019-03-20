import React, { Component } from 'react';
import FormBasic from './formbasic';
import './forms.scss';
import FormWizard from './formWizard';

class Forms extends Component {
  render() {
    return (
      <div className='' id='forms'>
        <section className='mx-3 mt-1 mb-4'>
          <h3 className='text-secondary'>Forms</h3>
          <p className='text-secondary'>Examples with form control styles, layout options, and custom inputs.</p>

          <div className='row'>            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Basic Form<br/>
                  <small>Basic form using formik library</small>
                </p>
                <FormBasic />
              </div>
            </div>

            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Wizard form<br/>
                  <small>Wizard form using final-form library</small>
                </p>
                <FormWizard/>
              </div>
            </div>
          </div>

        </section>
      </div>
            
    );
  }
}

export default Forms;
