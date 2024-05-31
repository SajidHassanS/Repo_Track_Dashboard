import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartThree: React.FC = () => {
  const [chartOptions, setChartOptions] = React.useState({
    series: [{
      name: "Recovery Time",
      data: [25, 30, 15, 10, 20, 18, 22, 19]
    }],
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
        width: 6
      },
      grid: {
        show: false
      },
      xaxis: {
        
        categories: ['10:00 pm - 12:00 am', '12:00 am - 2:00 am', '2:00 am - 4:00 am', '4:00 am - 6:00 am'],
        labels: {
          style: {
            colors: '#FFFFFF',
            fontSize: '12px'
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
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
      colors: ['#FF6347']
    }
  });

  return (
    <div className="dark:bg-[#090d28] bg-bodydark1 p-5 col-span-3 xl:col-span-1 rounded-2xl shadow-lg">
      <div className="flex w-full justify-between items-center text-black dark:text-white">
        <h3 className="font-bold text-title-lg">Total Revenue</h3>
        <h4 className="time-period-btn">Week</h4>
      </div>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={450} />
    </div>
  );
};

export default ChartThree;
