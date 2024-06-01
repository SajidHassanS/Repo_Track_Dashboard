import React from 'react';

const Filter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-bodydark1 dark:bg-[#090d28] rounded-2xl shadow-lg">
      <div className="w-full md:w-1/2 p-2 flex items-stretch">
        <div className="bg-bodydark1 dark:bg-[#181C3A] p-4 rounded-lg shadow-md flex-1 flex flex-col min-h-full">
          <h3 className="font-bold text-title-lg text-black dark:text-white mb-2">Date filters</h3>
          <div className="flex flex-col md:flex-row justify-between flex-grow">
            <div className="w-full md:w-1/2 p-2">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-1" className="mr-2" />
                <label htmlFor="date-option-1" className="text-black dark:text-white">Last 7 days</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-2" className="mr-2" />
                <label htmlFor="date-option-2" className="text-black dark:text-white">Last 15 days</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-3" className="mr-2" />
                <label htmlFor="date-option-3" className="text-black dark:text-white">Last 30 days</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-4" className="mr-2" />
                <label htmlFor="date-option-4" className="text-black dark:text-white">Last 12 months</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-custom" className="mr-2" />
                <label htmlFor="date-option-custom" className="text-black dark:text-white">Custom Date</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="date" id="custom-date-start" className="mr-2 text-black dark:text-white bg-white dark:bg-[#090D28] p-2 rounded w-32 h-8" />
                <span className="text-black dark:text-white mr-2">to</span>
                <input type="date" id="custom-date-end" className="text-black dark:text-white bg-white dark:bg-[#090D28] p-2 rounded w-32 h-8" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-7" className="mr-2" />
                <label htmlFor="date-option-7" className="text-black dark:text-white">Total</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-8" className="mr-2" />
                <label htmlFor="date-option-8" className="text-black dark:text-white">Average</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-9" className="mr-2" />
                <label htmlFor="date-option-9" className="text-black dark:text-white">Median</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="date-option-10" className="mr-2" />
                <label htmlFor="date-option-10" className="text-black dark:text-white">Standard Deviation</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 flex items-stretch">
        <div className="bg-bodydark1 dark:bg-[#181C3A] p-4 rounded-lg shadow-md flex-1 flex flex-col min-h-full">
          <h3 className="font-bold text-title-lg text-black dark:text-white mb-2">Compare</h3>
          <div className="flex flex-col md:flex-row justify-between flex-grow">
            <div className="w-full md:w-1/2 p-2">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-1" className="mr-2" />
                <label htmlFor="compare-option-1" className="text-black dark:text-white">Week over week</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-2" className="mr-2" />
                <label htmlFor="compare-option-2" className="text-black dark:text-white">Month over Month</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-3" className="mr-2" />
                <label htmlFor="compare-option-3" className="text-black dark:text-white">Quarter over Quarter</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-4" className="mr-2" />
                <label htmlFor="compare-option-4" className="text-black dark:text-white">Year over Year</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-custom" className="mr-2" />
                <label htmlFor="compare-option-custom" className="text-black dark:text-white">Custom Date</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="date" id="custom-compare-date-start" className="mr-2 text-black dark:text-white bg-white dark:bg-[#090D28] p-2 rounded w-32 h-8" />
                <span className="text-black dark:text-white mr-2">to</span>
                <input type="date" id="custom-compare-date-end" className="text-black dark:text-white bg-white dark:bg-[#090D28] p-2 rounded w-32 h-8" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-5" className="mr-2" />
                <label htmlFor="compare-option-5" className="text-black dark:text-white">Total</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-6" className="mr-2" />
                <label htmlFor="compare-option-6" className="text-black dark:text-white">Average</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-7" className="mr-2" />
                <label htmlFor="compare-option-7" className="text-black dark:text-white">Median</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="compare-option-8" className="mr-2" />
                <label htmlFor="compare-option-8" className="text-black dark:text-white">Standard Deviation</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
