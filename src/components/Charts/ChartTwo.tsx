import { ApexOptions } from 'apexcharts';
import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const radialOptions: ApexOptions = {
  series: [44, 55, 67, 83, 45, 23, 21],
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false, // Hide the toolbar
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '30%', // Size of the inner circle
      },
      track: {
        background: 'transparent', // Set track background to transparent
        strokeWidth: 'light', // Set track line width to light
      },
      dataLabels: {
        name: {
          fontSize: '40px',
          color: '#fff', // Set data label name color to white
        },
        value: {
          fontSize: '16px',
          color: '#fff', // Set data label value color to white
        },
        total: {
          show: true,
          label: '174',
          color: '#fff', // Set total label color to white
          formatter: function (w) {
            return 'Days to'; // Custom formatter function
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
      },
    },
  ],
};

const ChartTwo: React.FC = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, radialOptions);
      chart.render();
    }
  }, []);

  return (
    <div className="col-span-3 xl:col-span-1  h-full rounded-[25px] flex flex-col justify-between  p-7.5 shadow-default bg-bodydark1 dark:bg-[#090d28] transition-transform transform hover:scale-105 ">
      <div className="mb-16 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold  text-black dark:text-white">
            Total Report
          </h4>
        </div>
      </div>

      <div className='mb-10'>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart options={radialOptions} series={radialOptions.series} type="radialBar" height={350} />
        </div>
      </div>

      <div className="flex  justify-center gap-4 md:font-bold md:text-2xl items-center flex-wrap md:gap-4 mt-4">
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-orange-500"></span>
          <span>Day 1</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-red-500"></span>
          <span>Day 2</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-green-500"></span>
          <span>Day 3</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-blue-500"></span>
          <span>Day 4</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-pink-500"></span>
          <span>Day 5</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-teal-500"></span>
          <span>Day 6</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-4 h-4 rounded-full bg-red-700"></span>
          <span>Day 7</span>
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
