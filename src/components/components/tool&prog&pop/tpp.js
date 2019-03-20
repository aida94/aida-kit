import React, { Component } from 'react';
import Tooltip from './tooltip';
import Progress from './progress';
import Popover from './popover';

class Tpp extends Component {
  render() {
    return (
      <div className='text-secondary' id='tpp'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Other Components</h3>
          <p>Use this component if you want to show progress, popover or tooltip.</p>

          <div className='row'>
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 shadow'>
                <h5 className='font-weight-bold'>Tooltip</h5>
                <p>Tooltip example with different position</p>
                <div className='p-2 p-md-3 mr-md-4'>
                  <p className='font-weight-bold'>Tooltip</p>
                  <Tooltip/>
                </div>
              </div>
            </div>
            
            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 shadow'>
                <h5 className='font-weight-bold'>Popover</h5>
                <p>Popover example with different position</p>
                <div className='p-2 p-md-3 mr-md-4'>
                  <p className='font-weight-bold'>Popover</p>
                  <Popover/>
                </div>
              </div>
            </div>

            <div className='col-md-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 shadow'>
                <h5 className='font-weight-bold'>Progress</h5>
                <p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
                <div className='p-2 p-md-3 mr-md-4'>
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
