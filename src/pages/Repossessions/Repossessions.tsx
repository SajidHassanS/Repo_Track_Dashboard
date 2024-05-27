import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartTwo from './Components/ChartTwo';
import ChartOne from './Components/ChartOne';
import ChartThree from './Components/ChartThree';
import ChartFour from './Components/ChartFour';
import ListChartFourColors from './Components/ListChartFourColors';
import ChartFive from './Components/ChartFive';
import ChartSix from './Components/ChartSix';
import ChartSeven from './Components/ChartSeven';

const Repossessions = () => {

  return (
    <DefaultLayout>
      <div className='bg-[#090d28] rounded-2xl p-2 xl:p-5'>
        <ChartOne/>
      </div>
      <div className='grid grid-cols-2 my-8 gap-4 md:gap-6 2xl:gap-7.5'>
        <div className=' col-span-2 xl:col-span-1 bg-[#090d28] p-1 xl:p-5 rounded-2xl'>
          <ChartTwo/>
        </div>
        <div className=' col-span-2 xl:col-span-1 bg-[#090d28] p-1 xl:p-5 rounded-2xl'>
          <ChartThree/>
        </div>
      </div>
      <div className='bg-[#090d28] grid grid-cols-6 rounded-2xl p-1 xl:p-5'>
        <ListChartFourColors/>
        <div className=" col-span-6 2xl:col-span-5">
        <ChartFour/>
        </div>
      </div>
      <div className='bg-[#090d28] my-8 rounded-2xl p-1 xl:p-5'>
        <ChartFive/>
      </div>
      <div className='bg-[#090d28] my-8 rounded-2xl p-1 xl:p-5'>
        <ChartSix/>
      </div>
      <div className='bg-[#090d28] my-8 rounded-2xl p-1 xl:p-5'>
        <ChartSeven/>
      </div>
    </DefaultLayout>
  );
};

export default Repossessions;
