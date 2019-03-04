import React, { Component } from 'react';
import Collapse from './collapse';

class Collapses extends Component {
  render() {
    return (

      <div className='' id='collapses'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Collapse</h3>
          <p>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Button Collapse</p>
                <Collapse card='' header='btn btn-secondary' container='mt-3' icon='' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Card Collapse</p>
                <Collapse card='card' header='card-header' container='card-body' icon='' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Card Collapse with Icon</p>
                <Collapse card='card' header='card-header' container='card-body' icon='fa fa-plus collapseIcon' text='Show text' >
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Collapse>
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Card Collapse with Arrow Icon</p>
                <Collapse card='card' header='card-header' container='card-body' icon='fa fa-angle-down collapseIcon float-right' text='Show text' >
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
