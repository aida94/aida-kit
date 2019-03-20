import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'BTC',
    'ETH',
    'NEO',
    'STE',
    'EOS',
  ],
  datasets: [{
    data: [250, 150, 100, 50],
    backgroundColor: [
      '#4ce1b6',
      '#17a2b8',
      '#70bbfd',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#4ce1b6',
      '#17a2b8',
      '#70bbfd',
      '#FFCE56',
    ],
  }],
};
class DashDoughtnutChart extends Component {
  render() {
    return (

      <Doughnut data={data} />

    );
  }
}

export default DashDoughtnutChart;
