import React, { Component } from 'react';
import LineChart from './lineChart';
import BarChart from './barChart';
import PieChart from './pieChart';
import DoughnutChart from './doughnutChart';
import PolarChart from './polarChart';
import RadarChart from './radarChart';

class Charts extends Component {
  render() {
    return (
      <div className='text-secondary' id='charts'>
        <section className='mx-3 mt-1 mb-4'>
          <h3>Charts</h3>
          <p>Mix charts to provide a clear visual distinction between datasets.</p>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Line Chart</p>
                <LineChart />
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Bar Chart</p>
                <BarChart />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Pie Chart</p>
                <PieChart />
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Doughnut </p>
                <DoughnutChart />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Polar Area Chart</p>
                <PolarChart />
              </div>
            </div>
            
            <div className='col-md-6 mb-5'>
              <div className='bg-white rounded p-2 p-md-5 mr-md-4'>
                <p className='font-weight-bold'>Radar Chart</p>
                <RadarChart />
              </div>
            </div>
          </div>
        </section>
      </div>     
    );
  }
}

export default Charts;
