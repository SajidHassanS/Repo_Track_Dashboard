import React, { ReactNode, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface CardDataStatsProps {
  title1: string;
  title2: string;
  title3: string;
  rate1: string;
  rate2: string;
  rate3: string;
  graphValue: string;
  levelUp?: boolean;
  levelDown?: boolean;
  graphColor: string;
  graphData: number[];
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
      data: graphData
    }],
    options: {
      chart: {
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false,
          tools: {
            download: true
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: [graphColor]
      },
      fill: {
        colors: [graphColor]
      },
      xaxis: {
        type: 'datetime',
        categories: ['2024-05-01', '2024-05-02', '2024-05-03', '2024-05-04', '2024-05-05', '2024-05-06', '2024-05-07'],
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
    <div className="rounded-2xl w-64 h-64 py-4 px-4 shadow-default bg-[#090d28] overflow-hidden m-4 flex flex-col justify-between">
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-title-sm font-light text-bodydark">{title1}</h4>
        </div>
        <span className={`flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-meta-3' : ''} ${levelDown ? 'text-meta-5' : ''}`}>
          {rate1}
        </span>
      </div>
      <div className="relative">
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={100} />
        <h3 className="text-title-md font-bold absolute top-10 left-0 text-white">{graphValue}</h3>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-sm font-light text-bodydark">{title2}</h4>
        </div>
        <span className={`flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-meta-3' : ''} ${levelDown ? 'text-meta-5' : ''}`}>
          {rate2}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="text-sm font-light text-bodydark">{title3}</h4>
        </div>
        <span className={`flex items-center gap-1 text-sm font-medium ${levelUp ? 'text-meta-3' : ''} ${levelDown ? 'text-meta-5' : ''}`}>
          {rate3}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
