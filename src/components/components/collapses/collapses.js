import React, { Component } from 'react';
import Collapse from './collapse';

class Collapses extends Component {
  render() {
    return (

      <div className='text-secondary' id='collapses'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Collapse</h3>
          <p>Toggle the visibility of content across your project with a few classes and JavaScript </p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Button Collapse<br/>
                  <small>Default button collapse</small>
                </p>
                <Collapse card='' header='btn btn-secondary' container='mt-3' icon='' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Card Collapse<br/>
                  <small>Use default collapse with card style</small>
                </p>
                <Collapse card='card' header='card-header' container='card-body' icon='' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Card Collapse with Icon<br/>
                  <small>Use card style collapse with icon</small>
                </p>
                <Collapse card='card' header='card-header' container='card-body' icon='fa collapseIcon ' iconCollapse='fa-minus' iconNotCollapse='fa-plus' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Card Collapse with Arrow Icon<br/>
                  <small>Use card style collapse with icon align right</small>
                </p>
                <Collapse card='card' header='card-header' container='card-body' icon='fa collapseIcon float-right ' iconCollapse='fa-angle-up' iconNotCollapse='fa-angle-down' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default Collapses;
