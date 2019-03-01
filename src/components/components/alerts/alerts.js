import React, { Component } from 'react';
import Alert from './alert';

class Alerts extends Component {
  render() {
    const colorAlert = [
      { 
        name: 'bg-primary',
        class: 'alert alert-primary',
        icon: 'fa fa-info colorIcon', 
      },
      { 
        name: 'bg-danger',
        class: 'alert alert-danger',
        icon: 'fa fa-times colorIcon', 
      },
      { 
        name: 'bg-success',
        class: 'alert alert-success',
        icon: 'fa fa-thumbs-up colorIcon', 
      },
      { 
        name: 'bg-secondary',
        class: 'alert alert-secondary',
        icon: 'fa fa-check colorIcon', 
      },
      { 
        name: 'bg-warning',
        class: 'alert alert-warning',
        icon: 'fa fa-exclamation colorIcon', 
      },
    ];

    const borderIcon = [
      { 
        name: 'border-primary',
        class: 'alert border-primary',
        icon: 'fa fa-info borderIcon bg-primary', 
      },
      { 
        name: 'border-danger',
        class: 'alert border-danger ',
        icon: 'fa fa-times borderIcon bg-danger', 
      },
      { 
        name: 'border-success',
        class: 'alert border-success',
        icon: 'fa fa-thumbs-up borderIcon bg-success', 
      },
      { 
        name: 'border-secondary',
        class: 'alert border-secondary',
        icon: 'fa fa-check borderIcon bg-secondary', 
      },
      { 
        name: 'border-warning',
        class: 'alert border-warning',
        icon: 'fa fa-exclamation borderIcon bg-warning', 
      },
    ];

    const neutralColor = [
      { 
        name: 'border-primary',
        class: 'alert border-primary text-primary',
        icon: 'fa fa-info borderIcon text-primary', 
      },
      { 
        name: 'border-danger',
        class: 'alert border-danger text-danger',
        icon: 'fa fa-times borderIcon text-danger', 
      },
      { 
        name: 'border-success',
        class: 'alert border-success text-success',
        icon: 'fa fa-thumbs-up borderIcon text-success', 
      },
      { 
        name: 'border-secondary',
        class: 'alert border-secondary text-secondary',
        icon: 'fa fa-check borderIcon text-secondary', 
      },
      { 
        name: 'border-warning',
        class: 'alert border-warning text-warning',
        icon: 'fa fa-exclamation borderIcon text-warning', 
      },
    ];

    return (
      <div className='' id='alerts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Alerts</h3>
          <p>Use this elements, if you want to show some hints or additional primaryrmation</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Default Alerts</p>
                  {colorAlert.map((obj, index) => (
                    <Alert key={index} className={obj.class}>
                      This is a '{obj.name}' !
                    </Alert>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Color Alerts with Icons</p>
                  {colorAlert.map((obj, index) => (
                    <Alert key={index} className={obj.class}>
                      <i className={obj.icon}></i> 
                      <span className='ml-2'> This is a '{obj.name}' !</span>
                    </Alert>
                  ))}
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Border Alerts with Icons</p>
                  {borderIcon.map((obj, index) => (
                    <Alert key={index} className={obj.class}>
                      <i className={obj.icon}></i> 
                      <span className='ml-2'> This is a '{obj.name}' !</span>
                    </Alert>
                  ))}
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Neutral Alerts with Icons</p>
                  {neutralColor.map((obj, index) => (
                    <Alert key={index} className={obj.class}>
                      <i className={obj.icon}></i> 
                      <span className='ml-2'> This is a '{obj.name}' !</span>
                    </Alert>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
            
    );
  }
}

export default Alerts;
