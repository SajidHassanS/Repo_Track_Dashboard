import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps {}

const StoredVehicle: React.FC<ApexChartProps> = () => {
  const [series] = useState([
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]);

  const [options] = useState<ApexCharts.ApexOptions>({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false // Hide the toolbar (hamburger menu)
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      show: false // Hide the background grid lines
    },
    xaxis: {
      labels: {
        show: false // Hide x-axis labels
      },
      axisBorder: {
        show: false // Hide x-axis border
      },
      axisTicks: {
        show: false // Hide x-axis ticks
      }
    },
    yaxis: {
      min: 0,
      max: 100, // Adjust this range according to your data
      forceNiceScale: true // Ensure the chart doesn't go beyond this range
    }
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default StoredVehicle;
