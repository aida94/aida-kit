import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF6384',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FF6384',
      pointHoverBorderColor: 'white',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 75, 78, 66, 55, 65],
    },
    {
      label: 'My Second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#36A2EB',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#36A2EB',
      pointHoverBorderColor: 'white',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [75, 62, 70, 66, 56, 65, 50],
    },
  ],
};

class LineChart extends Component {
  render() {
    return (
      <Line data={data} />
    );
  }
}

export default LineChart;
