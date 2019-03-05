import React, { Component } from 'react';


class Charts extends Component {
  render() {
    return (
      <div className='' id='charts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Charts</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Charts</p>

              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Color Charts with Icons</p>

              </div>
            </div>
          </div>
        </section>
      </div>     
    );
  }
}

export default Charts;