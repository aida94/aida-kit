import React, { Component } from 'react';
import Button from './button';

class Buttons extends Component {
  render() {
    const basic = [
      {
        name: 'info',
        class: 'btn btnWidth text-white bg-info mr-1 mb-2',
        icon: 'fa fa-info btnIcon',
      },
      {
        name: 'success',
        class: 'btn btnWidth text-white bg-success mr-1 mb-2',
        icon: 'fa fa-thumbs-up btnIcon',
      },
      {
        name: 'danger',
        class: 'btn btnWidth text-white bg-danger mr-1 mb-2',
        icon: 'fa fa-times btnIcon',
      },
      {
        name: 'warning',
        class: 'btn btnWidth text-white bg-warning mr-1 mb-2',
        icon: 'fa fa-exclamation btnIcon',
      },
      {
        name: 'secondary',
        class: 'btn btnWidth text-white bg-secondary mr-1 mb-2',
        icon: 'fa fa-check btnIcon',
      },
      {
        name: 'info',
        class: 'btn btnWidth btn-outline-info mr-1 mb-2',
        icon: '',
      },
      {
        name: 'success',
        class: 'btn btnWidth btn-outline-success mr-1 mb-2',
        icon: '', 
      },
      {
        name: 'danger',
        class: 'btn btnWidth btn-outline-danger mr-1 mb-2',
        icon: '',
      },
      {
        name: 'warning',
        class: 'btn btnWidth btn-outline-warning mr-1 mb-2',
        icon: '',
      },
      {
        name: 'info',
        class: 'btn btnWidth btn-outline-light mr-1 mb-2',
        icon: '', 
      },
      
    ];

    return (
      <div className='button'>
      <section className='mb-5' id='button'>

        <h3>Buttons</h3>
        <p>Use this elements, if you want to show some hints or additional information</p>

        <div className='row mx-2 p-2'>
          <div className='col-md-6 mb-4'>
            <p className='font-weight-bold'>DEFAULT BUTTONS</p>
              {basic.map((basic, index) => (
                <Button key={index} className={basic.class}>
                  {basic.name}
                </Button>
              ))}
          </div>

          <div className='col-md-6 mb-4'>
            <p className='font-weight-bold'>BUTTONS ICON</p>
              {basic.slice(0, 5).map((basic, index) => (
                <Button key={index} className={`${basic.class}`}>
                  <i className={basic.icon}></i>
                  {basic.name}
                </Button>
              ))}
          </div>
        </div>

        <div className='row mx-2 p-2'>
          <div className='col-md-6 mb-4'>
            <p className='font-weight-bold'>SQUARE BUTTONS</p>
              {basic.map((basic, index) => (
                <Button key={index} className={`${basic.class} squarebtn`}>
                  {basic.name}
                </Button>
              ))}
          </div>

          <div className='col-md-6 mb-4'>
            <p className='font-weight-bold'>ROUNDED BUTTONS</p>
              {basic.map((basic, index) => (
                <Button key={index} className={`${basic.class} rounded-pill`}>
                  {basic.name}
                </Button>
              ))}
          </div>
        </div>

        <div className='row mx-2 p-2'>
          <div className='col-12 mb-4'>
            <p className='font-weight-bold'>Small buttons</p>
              {basic.map((basic, index) => (
                <Button key={index} className={`${basic.class}  btn-sm`}>
                  {basic.name}
                </Button>
              ))}
          </div>

          <div className='col-12 mb-4'>
            <p className='font-weight-bold'>Large buttons</p>
              {basic.map((basic, index) => (
                <Button key={index} className={`${basic.class} btn-lg`}>
                  {basic.name}
                </Button>
              ))}
          </div>

        </div>

      </section>
    </div>
    );
  }
}

export default Buttons;
