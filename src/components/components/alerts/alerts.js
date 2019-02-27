import React, { Component } from 'react';
import Alert from './alert';

class Alerts extends Component {
  render() {
    const basic = [
      'alert bg-info',
      'alert bg-danger',
      'alert bg-success',
      'alert bg-secondary',
      'alert bg-warning',
    ];

    const colorIcon = [
      { class: 'alert bg-info',
        icon: 'fa fa-info colorIcon' },
      { class: 'alert bg-danger ',
        icon: 'fa fa-times colorIcon' },
      { class: 'alert bg-success',
        icon: 'fa fa-thumbs-up colorIcon' },
      { class: 'alert bg-secondary',
        icon: 'fa fa-check colorIcon' },
      { class: 'alert bg-warning',
        icon: 'fa fa-exclamation colorIcon' },
    ];

    const borderIcon = [
      { class: 'alert border-info',
        icon: 'fa fa-info borderIcon bg-info' },
      { class: 'alert border-danger ',
        icon: 'fa fa-times borderIcon bg-danger' },
      { class: 'alert border-success',
        icon: 'fa fa-thumbs-up borderIcon bg-success' },
      { class: 'alert border-secondary',
        icon: 'fa fa-check borderIcon bg-secondary' },
      { class: 'alert border-warning',
        icon: 'fa fa-exclamation borderIcon bg-warning' },
    ];

    const neutralColor = [
      { class: 'alert border-info',
        icon: 'fa fa-info borderIcon text-info' },
      { class: 'alert border-danger ',
        icon: 'fa fa-times borderIcon text-danger' },
      { class: 'alert border-success',
        icon: 'fa fa-thumbs-up borderIcon text-success' },
      { class: 'alert border-secondary',
        icon: 'fa fa-check borderIcon text-secondary' },
      { class: 'alert border-warning',
        icon: 'fa fa-exclamation borderIcon text-warning' },
    ];

    return (

      <div className="alert ">
        <section className="mb-5" id="alert">

          <h3>Alerts</h3>
          <p>Use this elements, if you want to show some hints or additional information</p>

          <div className=" row mx-2 p-2">
            <div className="col-md-6 mb-4">
              <p className="font-weight-bold">BASIC ALERTS</p>
                {basic.map((basic, index) => (
                  <Alert key={index} className={basic}>
                    This is a '{basic}' !
                  </Alert>
                ))}
            </div>

            <div className="col-md-6 mb-4">
              <p className="font-weight-bold">COLORED ALERTS WITH ICONS</p>
                {colorIcon.map((variant, idx) => (
                  <Alert key={idx} className={variant.class}>
                    <i className={variant.icon}></i>
                    <span className="ml-2"> This is a '{variant.class}' !</span>
                  </Alert>
                ))}
            </div>
          </div>

          <div className=" row mx-3 p-3">
            <div className="col-md-6 mb-4">
              <p className="font-weight-bold">BORDERED ALERTS WITH ICONS</p>
                {borderIcon.map((variant, idx) => (
                  <Alert key={idx} className={variant.class}>
                    <i className={variant.icon}></i>
                    <span className="ml-2"> This is a '{variant.class}' !</span>
                  </Alert>
                ))}
            </div>

            <div className="col-md-6 mb-4">
              <p className="font-weight-bold">NEUTRAL ALERTS WITH ICONS</p>
                {neutralColor.map((variant, idx) => (
                  <Alert key={idx} className={variant.class}>
                    <i className={variant.icon}></i>
                    <span className="ml-2"> This is a '{variant.class}' !</span>
                  </Alert>
                ))}
            </div>
          </div>

        </section>
      </div>

    );
  }
}

export default Alerts;
