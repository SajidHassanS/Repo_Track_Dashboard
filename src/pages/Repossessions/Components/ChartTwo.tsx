import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTwo = () => {
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'pie',
      toolbar:{
        show:false
      }
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
      legend: {
        show: false
      },
  };

  return (
        <ReactApexChart options={options} series={series} type="pie" height={550}/>
  );
};

export default ChartTwo;
