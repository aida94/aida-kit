import React, { Component } from 'react';
import Button from './button';

class Buttons extends Component {
  render() {
    const basic = [
      {
        name: 'primary',
        class: 'btn text-white btn-primary mr-1 mb-2',
        icon: 'fa fa-info btnIcon',
      },
      {
        name: 'success',
        class: 'btn text-white btn-success mr-1 mb-2',
        icon: 'fa fa-thumbs-up btnIcon',
      },
      {
        name: 'danger',
        class: 'btn btn-danger mr-1 mb-2',
        icon: 'fa fa-times btnIcon',
      },
      {
        name: 'warning',
        class: 'btn text-white btn-warning mr-1 mb-2',
        icon: 'fa fa-exclamation btnIcon',
      },
      {
        name: 'secondary',
        class: 'btn btn-secondary mr-1 mb-2',
        icon: 'fa fa-check btnIcon',
      },
      {
        name: 'primary',
        class: 'btn btn-outline-primary mr-1 mb-2',
        icon: '',
      },
      {
        name: 'success',
        class: 'btn btn-outline-success mr-1 mb-2',
        icon: '', 
      },
      {
        name: 'danger',
        class: 'btn btn-outline-danger mr-1 mb-2',
        icon: '',
      },
      {
        name: 'warning',
        class: 'btn btn-outline-warning mr-1 mb-2',
        icon: '',
      },
      // {
      //   name: 'info',
      //   class: 'btn btn-outline-light mr-1 mb-2',
      //   icon: '', 
      // },
      
    ];

    return (

      <div className='text-secondary' id='alerts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Buttons</h3>
          <p>Provide different class to custom button styles like color, size and more.</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Default Buttons<br/>
                  <small>Use default button with necessary values of properties color and outline</small>
                </p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={basic.class}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Button Icons<br/>
                  <small>Use default button with icons</small>
                </p>
                  {basic.slice(0, 5).map((basic, index) => (
                    <Button key={index} className={`${basic.class}`}>
                      <i className={basic.icon}></i>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Square Buttons<br/>
                  <small>Change shape of button square</small>
                </p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class} squarebtn`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Rounded Buttons<br/>
                  <small>Change shape of button rounded-pill</small>
                </p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class} rounded-pill`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Small buttons<br/>
                  <small>Change size of button btn-sm</small>
                </p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class}  btn-sm`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-12'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
                <p className='font-weight-bold'>Large buttons<br/>
                  <small>Change size of button btn-lg</small>
                </p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class} btn-lg`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
          </div>


        </section>
      </div>
    );
  }
}

export default Buttons;
