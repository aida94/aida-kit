import React, { Component } from 'react';
import Notification from './notification';

class Notifications extends Component {
  render() {
    return (
      <div className='text-secondary' id='notifications'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Notifications</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>

                <p className='font-weight-bold'>Basic Notifications</p>
                <Notification class='text-muted' btnClass='btn btn-outline-secondary m-2 mb-4'/>

                <p className='font-weight-bold'>Primary Notifications</p>
                <Notification class='bg-primary text-white border-primary' btnClass='btn btn-outline-primary m-2 mb-4'/>

                <p className='font-weight-bold'>Danger Notifications</p>
                <Notification class='bg-danger text-white border-danger' btnClass='btn btn-outline-danger m-2 mb-4'/>

                <p className='font-weight-bold'>Success Notifications</p>
                <Notification class='bg-success text-white border-success' btnClass='btn btn-outline-success m-2 mb-4'/>

              </div>
            </div>
          </div>
        </section>
      </div>      
    );
  }
}

export default Notifications;
