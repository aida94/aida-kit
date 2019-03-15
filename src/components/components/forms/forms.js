import React, { Component } from 'react';
import FormBasic from './formbasic';
import './forms.scss';
import FormWizard from './formWizard';

class Forms extends Component {
  render() {
    return (
      <div className='' id='forms'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Forms</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Basic Form</p>
                <FormBasic />
              </div>
            </div>

            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Wizard form</p>
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
