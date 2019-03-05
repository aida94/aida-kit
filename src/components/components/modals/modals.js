import React, { Component } from 'react';
import DefaultModal from './defaultModal';
import IconModal from './iconModal';
import FormModal from './formModal';

class Modals extends Component {
  render() {
    return (
      <div className='' id='modals'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Modals</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Modals</p>
                <DefaultModal/>

              </div>
            </div>
            
            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Icon Modal</p>
                <IconModal/>
              </div>
            </div>

            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Form Modal</p>
                <FormModal/>
              </div>
            </div>
          </div>
        </section>
      </div>      
    );
  }
}

export default Modals;
