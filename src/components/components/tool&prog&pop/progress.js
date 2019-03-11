import React, { Component } from 'react';

class Progress extends Component {
  render() {
    return (

      <div>
        <p className='font-weight-bold '>Basic with different color</p>
        <div className='progress m-1'>
          <div className='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div>
        </div>
        <div className='progress m-1'>
          <div className='progress-bar' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
        </div>
        <div className='progress m-1'>
          <div className='progress-bar bg-success' role='progressbar' style={{ width: '50%' }} aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>
        </div>
        <div className='progress m-1'>
          <div className='progress-bar bg-warning' role='progressbar' style={{ width: '75%' }} aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
        </div>
        <div className='progress m-1 mb-3'>
          <div className='progress-bar bg-danger' role='progressbar' style={{ width: '100%' }} aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>
        </div>

        <p className='font-weight-bold mt-2'>With Label</p>
        <div className='progress m-1 mb-3'>
          <div className='progress-bar' role='progressbar' style={{ width: '75%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>75%</div>
        </div>

        <p className='font-weight-bold mt-2'>Height</p>
        <div className='progress m-1' style={{ height: '3px' }}>
          <div className='progress-bar' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
        </div>
        <div className='progress m-1  mb-3' style={{ height: '15px' }}>
          <div className='progress-bar' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
        </div>

        <p className='font-weight-bold mt-2'>Striped</p>
        <div className='progress m-1 mb-3'>
          <div className='progress-bar progress-bar-striped' role='progressbar' style={{ width: '10%' }} aria-valuenow='10' aria-valuemin='0' aria-valuemax='100'></div>
        </div>

        <p className='font-weight-bold mt-2'>Striped Animated </p>
        <div className='progress m-1 mb-3'>
          <div className='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style={{ width: '75%' }}></div>
        </div>
      </div>
    );
  }
}

export default Progress;
