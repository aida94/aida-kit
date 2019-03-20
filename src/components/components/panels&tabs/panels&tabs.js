import React, { Component } from 'react';
import Panel from './panel';
import TabHorizontal from './tabHorizontal';
import TabVertical from './tabVertical';

class PanelsTabs extends Component {
  render() {
    return (
      <div className='text-secondary' id='panels'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Panels</h3>
          <p>Use for making component partly hide or completly hide</p>

          <div className='row'>
            <Panel classDiv='col-md-6 mb-5' classHeader='bg-white rounded-top p-2 mr-md-4 shadow' headerText='Default Panels' classBody='bg-white rounded-bottom p-3 mr-md-4 shadow'> 
              <p className=''>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
            </Panel>
            <Panel classDiv='col-md-6 mb-5' classHeader='bg-success text-white rounded-top p-2 mr-md-4 shadow' headerText='Color Panels' classBody='bg-white rounded-bottom p-3 mr-md-4 shadow'>
              <p className=''>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
            </Panel>
          </div>
        </section>

        <section className='mx-3 mt-1 mb-4'>
          <h3>Tabs</h3>
          <p>Dynamic tabbed interfaces</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Default Tabs</p>
                <TabHorizontal />
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
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
