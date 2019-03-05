import React, { Component } from 'react';
import Tooltip from './tooltip';
import Progress from './progress';

class Tpp extends Component {
  render() {
    return (
      <div className='' id='tpp'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Other Components</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                <h5 className='font-weight-bold'>Tooltip</h5>
                <p>lorem lorem ipsakjk leijfeifn</p>
                <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                  <p className='font-weight-bold'>Tooltip</p>
                  <Tooltip/>
                </div>
              </div>
            </div>
            
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                <h5 className='font-weight-bold'>Popover</h5>
                <p>lorem lorem ipsakjk leijfeifn</p>
                <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                  <p className='font-weight-bold'>Tooltip</p>
                </div>
              </div>
            </div>

            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                <h5 className='font-weight-bold'>Progress</h5>
                <p>lorem lorem ipsakjk leijfeifn</p>
                <div className='bg-white rounded p-2 p-md-3 mr-md-4'>
                  
                  <Progress />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>       
    );
  }
}

export default Tpp;
