import React, { Component } from 'react';

class Utilities extends Component {

  render() {

    return (
      <div className="utilities ml-md-4 ">

        <section className="mb-5" id="border">
          <h3>Border</h3>
          <p>Use border utilities to quickly style the border and border-radius of an element. Some classes to use for borders</p>
          <div className="ml-4">
            <p className="font-weight-bold">Border</p>
            <div className="row mb-4">
              <p className="border-top p-2 mx-4">border-top</p>
              <p className="border-bottom p-2 mx-4">border-bottom </p>
              <p className="border-left p-2 mx-4">border-left </p>
              <p className="border-right p-2 mx-4">border-right</p>
              <p className="border p-2 mx-4">border</p>
            </div>
            <p className="font-weight-bold">Border-radius</p>
            <div className="row mb-4">
              <p className="border rounded p-2 mx-4">rounded</p>
              <p className="border rounded-circle p-2 mx-4">rounded-circle</p>
              <p className="border rounded-pill p-2 mx-4">rounded-pill</p>
              <p className="border rounded-sm p-2 mx-4">rounded-sm </p>
              <p className="border rounded-lg p-2 mx-4">rounded-lg</p>
            </div>
            <p className="font-weight-bold">Border-color</p>
            <div className="row mb-4">
              <p className="border border-primary p-2 mx-4">border-primary</p>
              <p className="border border-secondary p-2 mx-4">border-secondary</p>
              <p className="border border-success p-2 mx-4">border-success</p>
              <p className="border border-danger p-2 mx-4">border-danger </p>
              <p className="border border-warning p-2 mx-4">border-warning</p>
              <p className="border border-info p-2 mx-4">border-info</p>
              <p className="border border-light p-2 mx-4">border-light</p>
              <p className="border border-dark p-2 mx-4">border-dark</p>
            </div>
          </div>
        </section>

        <section className="mb-5" id="color">
          <h3>Color</h3>
          <p>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too</p>
          <div className="ml-4">
            <p className="font-weight-bold">Text color</p>
            <div className="row mb-4">
              <p className="text-primary p-2 mx-3">text-primary</p>
              <p className="text-secondary p-2 mx-3">text-secondary</p>
              <p className="text-success p-2 mx-3">text-success</p>
              <p className="text-danger p-2 mx-3">text-danger</p>
              <p className="text-warning p-2 mx-3">text-warning</p>
              <p className="text-info p-2 mx-3">text-info</p>
              <p className="text-light bg-dark p-2 mx-3">text-light</p>
              <p className="text-dark p-2 mx-3">text-dark</p>
              <p className="text-muted p-2 mx-3">text-muted</p>
            </div>
            <p className="font-weight-bold">Links color</p>
            <div className="row mb-4">
            
              <p><a href="#1" className="text-primary p-2 mx-3">text-primary</a></p>
              <p><a href="#1" className="text-secondary p-2 mx-3">text-secondary</a></p>
              <p><a href="#1" className="text-success p-2 mx-3">text-success</a></p>
              <p><a href="#1" className="text-danger p-2 mx-3">text-danger</a></p>
              <p><a href="#1" className="text-warning p-2 mx-3">text-warning</a></p>
              <p><a href="#1" className="text-info p-2 mx-3">text-info</a></p>
              <p><a href="#1" className="text-light bg-dark p-2 mx-3">text-light bg-dark</a></p>
              <p><a href="#1" className="text-dark p-2 mx-3">text-dark</a></p>
              <p><a href="#1" className="text-muted p-2 mx-3">text-muted</a></p>
            </div>

            <p className="font-weight-bold">Background color</p>
            <div className="row mb-4" >
              <div className="p-2 m-2 bg-primary text-white">bg-primary</div>
              <div className="p-2 m-2 bg-secondary text-white">bg-secondary</div>
              <div className="p-2 m-2 bg-success text-white">bg-success</div>
              <div className="p-2 m-2 bg-danger text-white">bg-danger</div>
              <div className="p-2 m-2 bg-warning text-dark">bg-warning</div>
              <div className="p-2 m-2 bg-info text-white">bg-info</div>
              <div className="p-2 m-2 bg-light text-dark">bg-light</div>
              <div className="p-2 m-2 bg-dark text-white">bg-dark</div>
              <div className="p-2 m-2 bg-white text-dark">bg-white</div>
              <div className="p-2 m-2 bg-transparent text-dark">bg-transparent</div>
            </div>
          </div>
        </section>

        <section className="mb-5" id="display">
          <h3>Display</h3>
          <p>Quickly and responsively toggle the display value of components and more with our display utilities.</p>
          <div className=" ml-4">
            <div className='row mb-4 '>
              <div className="p-2 mx-3">
                <p className="font-weight-bold">Inline example</p>
                <div className="d-inline p-2 bg-primary text-white">d-inline</div>
                <div className="d-inline p-2 bg-secondary text-white">d-inline</div>
              </div>
              <div className="p-2 mx-3">
                <p className="font-weight-bold">Block example</p>
                <div className="d-block p-2 bg-primary text-white">d-block</div>
                <div className="d-block p-2 bg-secondary text-white">d-block</div>
              </div>

              <div className="p-2 mx-3">
                <p className="font-weight-bold">Display none (d-none) </p>
                <div className="d-none p-2 bg-light">d-none</div>
              </div>

              <div className="p-2 mx-3">
                <p className="font-weight-bold">Visible </p>
                <div className="visible p-2 bg-light">visible</div>
              </div>

              <div className="p-2 mx-3">
                <p className="font-weight-bold">Invisible (invisible)</p>
                <div className="invisible p-2 bg-light">invisible</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5" id="shadows">
          <h3>Shadow</h3>
          <p>Add or remove shadows to elements with box-shadow utilities.</p>
          <div className="ml-4">
            <div className='row mb-4 '>
              <p className="shadow p-3 mx-4 mb-3 bg-white rounded">shadow</p>
              <p className="shadow-sm p-3 mx-4 mb-3 bg-white rounded">shadow-sm</p>
              <p className="shadow-lg p-3 mx-4 mb-3 bg-white rounded">shadow-lg</p>
              <p className="shadow-none p-3 mx-4 mb-3 bg-light rounded">shadow-none</p>
            </div>
            </div>
        </section>

        <section className="mb-5" id="sizing">
          <h3>Sizing</h3>
          <p>Easily make an element as wide or as tall with our width and height utilities</p>
          <div className="ml-4">
            <p className="font-weight-bold">Relative to the parent</p>
            <div className='bg-light mb-4'>
              <div className="w-25 p-1 bg-secondary" >Width 25%</div>
              <div className="w-50 p-1 bg-secondary" >Width 50%</div>
              <div className="w-75 p-1 bg-secondary" >Width 75%</div>
              <div className="w-100 p-1 bg-secondary" >Width 100%</div>
              <div className="w-auto p-1 bg-secondary" >Width auto</div>
            </div>
        </div>
        </section>
        
        <section className="mb-5" id="text">
          <h3>Text</h3>
          <p>Documentation and examples for common text utilities.</p>
          <div className="ml-4">
            <div className='mb-4'>
              <p className="font-weight-bold">Text alignment</p>
              <div>
                <p className="text-justify">text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify, text-justify)</p>
                <p className="text-left">text-left on all viewport sizes.</p>
                <p className="text-center">text-center on all viewport sizes.</p>
                <p className="text-right">text-right on all viewport sizes.</p>
              </div>   

              <p className="font-weight-bold">Text wrapping</p>  
              <div className="row mb-4 ">
                <p className="text-wrap bg-secondary mx-2 " style={{width: '8rem'}}> This text text-wrap</p>
                <p className="text-nowrap bg-secondary mx-2 " style={{width: '8rem'}}> This text is text-nowrap</p>
              </div>

              <p className="font-weight-bold">Text editing</p>  
              <div className="">
                <p className="text-lowercase">text-lowercase</p>
                <p className="text-uppercase">text-uppercase</p>
                <p className="text-capitalize">text-capitalize</p>
                <p className="font-weight-bold">font-weight-bold</p>
                <p className="font-weight-normal">font-weight-normal</p>
                <p className="font-weight-light">font-weight-light</p>
                <p className="font-italic">font-italic</p>
                <a href="#1" className="text-decoration-none">text-decoration-none</a>
              </div>


            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Utilities;