import React, { Component } from 'react';
import Dropdown from './dropdown';

class Dropdowns extends Component {
  render() { 
    return (
      <div>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Dropdowns</h3>
          <p>Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Dropdown</p>
                <div className='row'>
                  <Dropdown text='Dropdown button' class='dropdown m-2' focus='' />
                  <Dropdown text='Dropup button' class='dropup m-2' focus='' />
                  <Dropdown text='Dropleft button' class='dropleft m-2' focus='' />
                  <Dropdown text='Dropright button' class='dropright m-2' focus='' />
                </div>
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Hide Menu When Click Outside Menu</p>
                <div className='row'>
                  <Dropdown text='Dropdown button' class='dropdown m-2' focus='true' />
                  <Dropdown text='Dropup button' class='dropup m-2' focus='true' />
                  <Dropdown text='Dropleft button' class='dropleft m-2' focus='true' />
                  <Dropdown text='Dropright button' class='dropright m-2' focus='true' />
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 offset-lg-3 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Custom Dropdown with Search</p>      
                <div className='row'>
                  <Dropdown text='Dropright button' class='dropright m-2' focus='true' search='true' /> 
                </div>          
              </div>
            </div>
            
          </div>
        </section>
      </div>

    );
  }
}

export default Dropdowns;
