import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartFive: React.FC = () => {
  const [chartOptions, setChartOptions] = React.useState({
    series: [{
      name: "Recovery Time",
      data: [11, 17, 15, 15, 21, 14, 21, 14, 4, 2, 13, 2, 12, 11, 10]
    }],
    options: {
      chart: {
        height: 350,
        toolbar: {
          show: false,
        },
        type: 'area', // Changed from 'line' to 'area'
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 6
      },
      grid: {
        borderColor: 'gray', // Set grid color to white
        strokeDashArray: 5 // Set dashed lines
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
      yaxis: {
        min: 0,
        max: 35,
        tickAmount: 7, // Creates labels at 0, 5, 10, 15, 20, 25, 30, and 35
        labels: {
          style: {
            colors: '#FFFFFF',
            fontSize: '12px'
          }
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
      colors: ['#00d394']
    }
    
  });

  return (
    <div className="dark:bg-[#090d28] bg-bodydark1 p-5 rounded-2xl shadow-lg">
      <div className="flex w-full justify-between items-center text-black dark:text-white">
        <h3 className="font-bold text-title-lg">Average Day To Day Repo</h3>
      </div>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={550} />
    </div>
  );
};

export default ChartFive;
