import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne = () => {
    const series = [
        {
            name: 'Repossessions',
            data: [
                { x: '2024 (1w)', y: [5, 20] },
                { x: '2024 (2w)', y: [10, 25] },
                { x: '2024 (3w)', y: [5, 18] },
                { x: '2024 (4w)', y: [15, 32] },
                { x: '2024 (5w)', y: [10, 20] },
                { x: '2024 (6w)', y: [5, 22] },
                { x: '2024 (7w)', y: [15, 28] },
                { x: '2024 (8w)', y: [5, 18] },
                { x: '2024 (9w)', y: [5, 34] },
                { x: '2024 (10w)', y: [5, 22] },
            ],
        },
    ];

    const options = {
        chart: {
            type: 'rangeBar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '45%',
              borderRadius: 40,
              
          },
      },
        responsive: [
          {
            breakpoint: 2000,
            options: {
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    borderRadius: 40,
                    
                },
            },
            },
          },
          {
            breakpoint: 1400,
            options: {
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    borderRadius: 40,
                    
                },
            },
            },
          },
          {
            breakpoint: 1200,
            options: {
              chart: {
                height: 400,
              },
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '100%',
                    borderRadius: 40,
                    
                },
            },
            },
          },
          {
            breakpoint: 992,
            options: {
              chart: {
                height: 350,
              },
            },
          },
          {
            breakpoint: 768,
            options: {
              chart: {
                height: 300,
              },
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    borderRadius: 15,
                    
                },
            },
          },
        },
          {
            breakpoint: 576,
            options: {
              chart: {
                height: 250,
              },
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    borderRadius: 10,
                    
                },
            },
            },
          },
          {
            breakpoint: 450,
            options: {
              chart: {
                height: 250,
              },
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    borderRadius: 5,
                    
                },
            },
            },
          },
        ],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: '#ffffff',
                },
            },
        },
        yaxis: {
            min: 0,
            max: 35,
            tickAmount: 7, // This will create a gap of 5 between labels
            labels: {
                style: {
                    colors: '#ffffff',
                },
            },
        },
        grid: {
            borderColor: '#40475d',
            strokeDashArray: 5, // Makes grid lines dashed
        },
        fill: {
            opacity: 1,
        },
        colors: [
            function ({ value }) {
                if (value < 20) {
                    return '#ea5136';
                } else if (value >= 20 && value < 25) {
                    return '#00d394';
                } else {
                    return '#f4a086';
                }
            },
        ],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val[1] - val[0];
                },
            },
        },
    };

    return (
            <ReactApexChart options={options} series={series} type="rangeBar" height={550} />
    );
};

export default ChartOne;
