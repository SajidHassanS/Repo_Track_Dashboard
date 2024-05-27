import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartFour = () => {
  const options = {
    series: [
      { data: [11, 17, 15, 15, 21, 14, 21, 14, 4, 2, 13, 2, 12, 11, 10] },
      { data: [1, 7, 5, 11, 15, 4, 12, 14, 4, 2, 3, 2, 2, 1, 19] }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
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
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'end', // 'around', 'end'
          borderRadiusWhenStacked: 'last', // 'all', 'last'
        }
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '01/01/2011 GMT',
          '01/02/2011 GMT',
          '01/03/2011 GMT',
          '01/04/2011 GMT',
          '01/05/2011 GMT',
          '01/06/2011 GMT',
          '01/07/2011 GMT',
          '01/08/2011 GMT',
          '01/09/2011 GMT',
          '01/10/2011 GMT',
          '01/11/2011 GMT',
          '01/12/2011 GMT',
          '01/13/2011 GMT',
          '01/14/2011 GMT',
          '01/15/2011 GMT',
        ],
        labels: {
          trim: true, // Trim x-axis labels
          style: {
            fontSize: '12px'
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tickAmount: 20 // Show only 20 labels
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        tickAmount: 7, // Set gap of 5 between labels
        min: 0,
        max: 35
      },
      colors: ['#00d394', '#ea5136'], // Set colors for the bars
      legend: {
        show: false // Hide legend
      },
      fill: {
        opacity: 1
      },
      
      grid: {
        borderColor: 'gray', // Set grid color to white
        strokeDashArray: 5 // Set dashed lines
      },
      stroke: {
        show: false // Remove stroke lines
      },
    }
  };
  
  
  

  return (
    <div className="bg-[#090d28] p-5 col-span-3 xl:col-span-2 rounded-2xl shadow-lg">
      <div className="flex w-full justify-between items-center text-white">
        <h3 className="font-bold text-title-lg">Total Repossessions</h3>
        <h4 className="time-period-btn">30 Days</h4>
      </div>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="bar"
        height={450}
      />
    </div>
  );
};

export default ChartFour;
