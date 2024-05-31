import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartTwo = () => {
  const series = [44, 55, 13, 43, 22];

  const options = {
    chart: {
      type: 'donut',
      toolbar:{
        show:false
      }
    },
    responsive: [
      {
        breakpoint: 1300,
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
    dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
  };

  return (
    <div className=' relative'>
      <div className="dark:bg-[#090d28] bg-bodydark1 p-5 rounded-2xl mb-5">
        <div className="flex w-full justify-between items-center text-white">
          <h3 className="font-bold text-title-lg">Branches</h3>
        </div>
      </div>
    <ReactApexChart options={options} series={series} type="donut" height={550}/>
  <div className=' absolute inset-0 items-center sm:gap-20 gap-28 xl:gap-40 justify-center flex flex-col'>
    <div className='w-full flex justify-center sm:gap-[250px] gap-[180px] lg:gap-[300px] xl:gap-[750px] 2xl:gap-[500px] text-center items-center text-xs sm:text-xl xl:text-3xl'>
   <div className='flex flex-col justify-center items-center rotate-[30deg] gap-1 xl:gap-4'>
    <div className=' border-2 w-2/3  lg:-rotate-[15deg] h-3 xl:h-6 ml-10 lg:ml-20 border-r-0 border-b-0'>
    </div>
   <h2 className="">Category <br/> Cate</h2>
   </div>
    <div className='flex flex-col justify-center items-center -rotate-[30deg] gap-1 xl:gap-4'>
    <div className=' border-2 w-2/3 lg:rotate-[15deg] h-3 xl:h-6 mr-10 lg:mr-20 border-l-0 border-b-0'>
    </div>
   <h2 className="">Category <br/> Cate</h2>
   </div>
    </div>
    <div className='w-full flex justify-center sm:gap-[250px] gap-[180px] lg:gap-[300px] xl:gap-[750px] 2xl:gap-[500px] text-center items-center text-xs sm:text-xl xl:text-3xl'>
    <div className='flex flex-col justify-center items-center -rotate-[30deg] gap-1 xl:gap-4'>
   <h2 className="">Category <br/> Cate</h2>
   <div className=' border-2 w-2/3 lg:rotate-[15deg] h-3 xl:h-6 ml-10 lg:ml-20 border-r-0 border-t-0'>
    </div>
   </div>
    <div className='flex flex-col justify-center items-center rotate-[30deg] gap-1 xl:gap-4'>
   <h2 className="">Category <br/> Cate</h2>
   <div className=' border-2 w-2/3  lg:-rotate-[15deg] h-3 xl:h-6 mr-10 lg:mr-20 border-l-0 border-t-0'>
    </div>
   </div>
    </div>
 
  </div>
</div>
  );
};

export default ChartTwo;
