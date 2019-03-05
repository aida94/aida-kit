import React, { Component } from 'react';
import FormBasic from './formbasic';


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
                <p className='font-weight-bold'>DATE PICKER</p>
                
              </div>
            </div>
          </div>

          <div className='row'>            
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Wizard form</p>
              </div>
            </div>
          </div>

        </section>
      </div>
            
    );
  }
}

export default Forms;
