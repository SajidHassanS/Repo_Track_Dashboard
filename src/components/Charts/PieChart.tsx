import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps {}

const PieChart: React.FC<ApexChartProps> = () => {
  const [series, setSeries] = useState<number[]>([44, 55, 13, 43, 22]);
  const [options, setOptions] = useState<ApexCharts.ApexOptions>({
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
