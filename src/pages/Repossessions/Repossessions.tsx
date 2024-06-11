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
import DayRepo from './Components/DayRepo';
import RecoveryTime from './Components/RecoveryTime';
import AverageDay from './Components/AverageDay';
import RecoveryRate from './Components/RecoveryRate';
import Weekbyweek from './Components/WeekByweek'
const Repossessions = () => {
  return (
    <DefaultLayout>
      <div className='rounded-2xl p-2 xl:p-5'>
        <Filter/>
      </div>
      
       <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartSeven/>
      </div>
      <div className='rounded-2xl p-2 xl:p-5 transition-transform transform hover:scale-105'>
        <RecoveryRate/>
      </div>
      <div className='grid grid-cols-2 my-8 gap-4 md:gap-6 2xl:gap-7.5'>
        <div className='col-span-2 xl:col-span-1 h-full p-1 xl:p-5 rounded-2xl transition-transform transform hover:scale-105'>
          <DayRepo/>
        </div>
        <div className='col-span-2 xl:col-span-1 p-1 xl:p-5 rounded-2xl transition-transform transform hover:scale-105'>
          <RecoveryTime/>
        </div>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartFive/>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <Weekbyweek/>
      </div>
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <ChartSix/>
      </div>
     
      <div className='my-8 rounded-2xl p-1 xl:p-5 transition-transform transform hover:scale-105'>
        <AverageDay/>
      </div>
    </DefaultLayout>
  );
};

export default Repossessions;
