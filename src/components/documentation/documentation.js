import React, { Component } from 'react';

class Documentation extends Component {
  render() {
    return (
      <div className='text-secondary' id='documentation'>
      <section className='mx-3 mt-1 mb-4'>
        <h3>Documentation</h3>
        <p>A little description of project </p>

        <div className='row'>
          <div className='col-md-12 mb-5'>
            <div className='bg-white rounded p-2 p-md-5 mr-md-4 shadow'>
              <h5>INTRODUCTION</h5>
              <p className='mb-5'>
                KitApp is a simple dashboard template based on React Components and Bootstrap 4 Framework. 
                This is my first app in React and I tried to keep it simple. 
                I built some components based on famous Bootstrap components and utilities trying to make them interactive.
                There are a lot of other components coming ...
              </p>

              <h5>FEATURES</h5>
              <ul>
                <li>BootStrap 4</li>
                <li>ChartJS</li>
                <li>Formik</li>
                <li>Sass</li>
                <li>React Bootstrap Table</li>
                <li>React Chartjs 2</li>
                <li>React Final Form</li>
                <li>React Responsive Carousel</li>
                <li>React Router</li>
              </ul>
              
            </div>
          </div>
        </div>


      </section>
    </div>
    );
  }
}

export default Documentation;
