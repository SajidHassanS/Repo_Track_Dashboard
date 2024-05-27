import React, { ReactNode, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title1,
  title2,
  title3,
  rate1,
  rate2,
  rate3,
  graphValue,
  levelUp,
  levelDown,
  graphColor,
  graphData,
}) => {
  const [chartOptions] = useState({
    series: [{
      name: "STOCK ABC",
      data: graphData  // Static values for the data series
    }],
    options: {
      chart: {
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,  // Enable the toolbar
          tools: {
            download: true  // Enable the download button
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: [graphColor]  // Set the line color
      },
      fill: {
        // type: 'gradient',
        // gradient: {
        //   shadeIntensity: 1,
        //   opacityFrom: 0.7,
        //   opacityTo: 0.9,
        //   stops: [0, 90, 100]
        // },
        colors: [graphColor]  // Set the area color
      },
      xaxis: {
        type: 'datetime',
        categories: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07'],  // Static dates for the x-axis
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      legend: {
        horizontalAlign: 'left'
      }
    }
  });
  return (
    <div className="rounded-2xl   py-6 px-7.5 shadow-default bg-[#090d28]">
      {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 bg-meta-4">
        {children}
      </div> */}

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-sm font-light  text-bodydark">
            {title1}
          </h4>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate1}

          {/* {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )} */}
        </span>

        </div>
        <div className=' relative'>
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={150} />
        <h3 className='text-title-md font-bold absolute top-10 left-0  text-white'>{graphValue}</h3>
        </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-sm font-light  text-bodydark">
            {title2}
          </h4>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate2}

          {/* {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )} */}
        </span>

        </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-sm font-light  text-bodydark">
            {title3}
          </h4>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate3}

          {/* {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )} */}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
