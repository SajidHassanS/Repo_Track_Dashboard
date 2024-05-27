import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
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
    <>
    <div className="bg-[#090d28] p-5 rounded-2xl shadow-lg">
       <div className="flex w-full justify-between items-center text-white">
        <h3 className="font-bold text-title-lg">Stored Vehicle Pending</h3>
      </div>
        <ReactApexChart options={options} series={series} type="pie" height={450} width={450}/>
        </div>
        </>
  );
};

export default PieChart;
