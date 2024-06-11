import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne = () => {
  const series = [1, 8, 12, 5, 9, 1, 7, 16, 17, 24];

  const colors = [
    '#a62811', 
    '#d43316', 
    '#ea5136', 
    '#00FF0A', 
    '#f29787', 
    '#0c7699', 
    '#f8991d', 
    '#00d394', 
    '#6bffd3', 
    '#c9c822', 
  ];

  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false,
      },
    },
    colors: colors,
    responsive: [
      {
        breakpoint: 1300,
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
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="relative">
      <div className="dark:bg-[#090d28] bg-bodydark1 p-5 mx-16 rounded-2xl mb-5"></div>
      <ReactApexChart options={options} series={series} type="donut" height={550} />
      <div className="absolute inset-0 items-center sm:gap-20 gap-28 xl:gap-40 justify-center flex flex-col">
        <div className="w-full flex justify-center sm:gap-[220px] gap-[140px] lg:gap-[350px] xl:gap-[500px] 2xl:gap-[450px] text-center items-center text-xs sm:text-xl xl:text-3xl">
          <div className="flex flex-col justify-center items-center rotate-[30deg] gap-1 xl:gap-4">
            <div className="border-2 w-2/3 lg:-rotate-[15deg] h-3 xl:h-6 ml-10 lg:ml-20 border-r-0 border-b-0"></div>
            <h2 className="">Category <br /> Cate</h2>
          </div>
          <div className="flex flex-col justify-center items-center -rotate-[30deg] gap-1 xl:gap-4">
            <div className="border-2 w-2/3 lg:rotate-[15deg] h-3 xl:h-6 mr-10 lg:mr-20 border-l-0 border-b-0"></div>
            <h2 className="">Category <br /> Cate</h2>
          </div>
        </div>
        <div className="w-full flex justify-center sm:gap-[250px] gap-[180px] lg:gap-[300px] xl:gap-[500px] 2xl:gap-[450px] text-center items-center text-xs sm:text-xl xl:text-3xl">
          <div className="flex flex-col justify-center items-center -rotate-[30deg] gap-1 xl:gap-4">
            <h2 className="">Category <br /> Cate</h2>
            <div className="border-2 w-2/3 lg:rotate-[15deg] h-3 xl:h-6 ml-10 lg:ml-20 border-r-0 border-t-0"></div>
          </div>
          <div className="flex flex-col justify-center items-center rotate-[30deg] gap-1 xl:gap-4">
            <h2 className="">Category <br /> Cate</h2>
            <div className="border-2 w-2/3 lg:-rotate-[15deg] h-3 xl:h-6 mr-10 lg:mr-20 border-l-0 border-t-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
