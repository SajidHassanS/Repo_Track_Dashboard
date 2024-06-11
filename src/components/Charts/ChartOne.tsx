

import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  chart: {
    type: 'area',
    height: 335,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      color: '#19c48a',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    fontFamily: 'Satoshi, sans-serif',
  },
  colors: ['#19c48a'],
  stroke: {
    width: 6,
    curve: 'smooth',
    colors: ['#19c48a'],
  },
  fill: {
    colors: ['#19c48a'],
  },
  grid: {
    borderColor: '#fff',
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2024-03-01', '2024-03-02', '2024-03-03', '2024-03-04', '2024-03-05', '2024-03-06', '2024-03-07'
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize:"22px",
        colors: '#fff',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize:"22px",
        colors: '#fff',
      },
      formatter: (value) => `${value}k`,
    },
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
};


const ChartOne: React.FC = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Revenue',
        data: [5, 6, 5, 6, 7, 8, 7],  // Static data points to match the example image
      },
    ],
  });

  return (
    <div className="col-span-3 xl:col-span-2 rounded-2xl dark:border  px-5 pt-7.5 pb-5 shadow-default border-strokedark bg-bodydark1 dark:bg-[#eb5431] sm:px-7.5 transition-transform transform hover:scale-105  " >
      <div className="flex w-full justify-between text-black  dark:text-white">
        <h3 className="text-xl font-semibold  text-black dark:text-white">Total Revenue</h3>
        <h4 className="time-period-btn">last 30 days</h4>
      </div>
      <div id="chart">
        <ReactApexChart options={options} series={state.series} type="area" height={450} />
      </div>
    </div>
  );
};

export default ChartOne;
