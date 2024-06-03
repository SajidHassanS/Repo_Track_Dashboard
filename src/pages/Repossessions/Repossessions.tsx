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
import Filter from './Components/Filter';

const Repossessions = () => {
  return (
    <DefaultLayout>
      <div className='rounded-2xl p-2 xl:p-5'>
        <Filter/>
      </div>
      <div className='rounded-2xl p-2 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartOne/>
      </div>
      <div className='grid grid-cols-2 my-8 gap-4 md:gap-6 2xl:gap-7.5'>
        <div className='col-span-2 xl:col-span-1 h-full p-1 xl:p-5 rounded-2xl transition-transform transform hover:scale-105'>
          <ChartTwo/>
        </div>
        <div className='col-span-2 xl:col-span-1 p-1 xl:p-5 rounded-2xl transition-transform transform hover:scale-105'>
          <ChartThree/>
        </div>
      </div>
      <div className='dark:bg-[#090d28] bg-bodydark1 grid grid-cols-6 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ListChartFourColors/>
        <div className='col-span-6 2xl:col-span-5 transition-transform transform hover:scale-105'>
          <ChartFour/>
        </div>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartFive/>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartSix/>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartSeven/>
      </div>
    </DefaultLayout>
  );
};

export default Repossessions;
