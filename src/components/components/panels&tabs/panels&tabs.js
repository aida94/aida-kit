import React, { Component } from 'react';
import Panel from './panel';
import TabHorizontal from './tabHorizontal';
import TabVertical from './tabVertical';

class PanelsTabs extends Component {
  render() {
    return (
      <div className='' id='panels'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Panels</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <Panel classHeader='bg-white rounded-top p-1 mr-md-4'/>
            <Panel classHeader='bg-success text-white rounded-top p-1 mr-md-4'/>
          </div>
        </section>

        <section className='mx-3 mt-1 mb-4'>
          <h3>Tabs</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Tabs</p>
                <TabHorizontal />
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Color Panels with Icons</p>
                <TabVertical />
              </div>
            </div>
          </div>
        </section>
      </div>    
    );
  }
}

export default PanelsTabs;
