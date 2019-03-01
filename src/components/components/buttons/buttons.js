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

      <div className='' id='alerts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Buttons</h3>
          <p>Use this elements, if you want to show some hints or additional information</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Buttons</p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={basic.class}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Button Icons</p>
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
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Square Buttons</p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class} squarebtn`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Rounded Buttons</p>
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
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Small buttons</p>
                  {basic.map((basic, index) => (
                    <Button key={index} className={`${basic.class}  btn-sm`}>
                      {basic.name}
                    </Button>
                  ))}
              </div>
            </div>
            
            <div className='col-12'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Large buttons</p>
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
