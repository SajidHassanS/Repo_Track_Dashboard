import React, { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartOne from './components/ChartOne';
import Table from '../Reports/components/Table';
import ListChartFourColors from '../Repossessions/Components/ListChartFourColors';

const Branches = () => {
  const [view, setView] = useState('chart'); // Default view is 'chart'

  return (
    <DefaultLayout>
      <div className='dark:bg-[#090d28] bg-bodydark1 grid grid-cols-6 rounded-2xl p-1 xl:p-5 '>
        <ListChartFourColors />

        <div className="col-span-6 2xl:col-span-5 transition-transform transform hover:scale-105">
          {view === 'chart' ? <ChartOne /> : <Table />}
        </div>

        <div className="flex justify-end col-span-6 mt-4">
          <div className="flex space-x-4">
            <button 
              className="dark:bg-[#090d28] bg-bodydark1 text-gray-600 px-4 py-2 rounded"
              onClick={() => setView('chart')}
            >
              Pie Chart
            </button>
            <button 
              className="dark:bg-[#091d28] bg-bodydark1 text-gray-600 px-4 py-2 rounded"
              onClick={() => setView('table')}
            >
              Table
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Branches;
