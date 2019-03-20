import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'BTC',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(76, 225, 182, 0.1)',
      borderColor: 'rgba(76, 225, 182, 0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4ce1b6',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4ce1b6',
      pointHoverBorderColor: 'white',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 75, 78, 66, 55, 65],
    },
    {
      label: 'ETH',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(23, 162, 184,0.1)',
      borderColor: 'rgba(23, 162, 184,0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#17a2b8 ',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#17a2b8 ',
      pointHoverBorderColor: 'white',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [75, 62, 70, 66, 56, 65, 50],
    },
  ],
};

class DashLineChart extends Component {
  render() {
    return (
      <Line data={data} width={100} height={27}/>
    );
  }
}

export default DashLineChart;
