import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartThree: React.FC = () => {
  const [chartOptions, setChartOptions] = React.useState({
    series: [
      {
        name: "Recovery Time",
        data: [250, 300, 150, 500, 200, 180, 220, 190]
      },
      {
        name: "Response Time",
        data: [230, 500, 180, 450, 170, 580, 250, 200]
      }
    ],
    options: {
      chart: {
        height: 350,
        toolbar: {
          show: false,
        },
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 100,
        max: 600,
        tickAmount: 6, // Creates labels at 100, 200, 300, 400, 500, 600
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
      colors: ['#FF6347', '#1E90FF']
    }
  });

  return (
    <div className="dark:bg-[#090d28] bg-bodydark1 p-5 col-span-3 xl:col-span-1 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <div className="flex w-full justify-between items-center text-black dark:text-white">
        <h3 className="font-bold text-title-lg">Total Revenue</h3>
        <h4 className="time-period-btn">Week</h4>
      </div>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={450} />
    </div>
  );
};

export default ChartThree;
