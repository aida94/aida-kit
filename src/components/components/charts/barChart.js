import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      hoverBackgroundColor: '#FF6384',
      hoverBorderColor: '#FF6384',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

class BarChart extends Component {
  render() {
    return (
        <Bar
        data={data}
        // width={100}
        // height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    );
  }
}

export default BarChart;
