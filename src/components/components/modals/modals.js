import React, { Component } from 'react';
import './modals.scss';
import DefaultModal from './defaultModal';
import IconModal from './iconModal';
import FormModal from './formModal';

class Modals extends Component {
  render() {
    return (
      <div className='text-secondary' id='modals'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Modals</h3>
          <p>Use modal to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

          <div className='row'>
            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Default Modals<br/>
                  <small>Default modal</small>
                </p>
                <DefaultModal/>

              </div>
            </div>
            
            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Icon Modal<br/>
                  <small>Default modal with icon</small>
                </p>
                <IconModal/>
              </div>
            </div>

            <div className='col-md-4 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Form Modal<br/>
                  <small>Modal with form</small>
                </p>
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
