import React, { useState } from 'react';
import Table from './Table'; 
const GenerateRep: React.FC = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [showTable, setShowTable] = useState(false); // State to track if the table should be shown

  const handleGenerateReport = () => {
    
    setShowTable(prevState => !prevState); 
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-black dark:text-white mb-4">Generate Report</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-1" className="mb-2">Client</label>
          <select id="dropdown-1" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-2" className="mb-2">SubContractor</label>
          <select id="dropdown-2" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-3" className="mb-2">User</label>
          <select id="dropdown-3" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-4" className="mb-2">BSO Type</label>
          <select id="dropdown-4" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-5" className="mb-2">Hit Type</label>
          <select id="dropdown-5" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-6" className="mb-2">Approval Needed</label>
          <select id="dropdown-6" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-7" className="mb-2">Collateral Type</label>
          <select id="dropdown-7" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-8" className="mb-2">Administrator</label>
          <select id="dropdown-8" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-9" className="mb-2">CaseWorker</label>
          <select id="dropdown-9" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-10" className="mb-2">Manager</label>
          <select id="dropdown-10" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-11" className="mb-2">From</label>
          <input id="dropdown-11" className="border rounded px-2 py-1 bg-transparent" type="date" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-12" className="mb-2">To</label>
          <input id="dropdown-12" className="border rounded px-2 py-1 bg-transparent" type="date" />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-13" className="mb-2">Quick Date</label>
          <select id="dropdown-13" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-14" className="mb-2">Format</label>
          <select id="dropdown-14" className="border rounded px-2 py-1 bg-transparent">
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="dropdown-15" className="mb-2">Actions</label>
          <div className="flex space-x-2">
            <select id="dropdown-15" className="border rounded px-2 py-1 bg-transparent">
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <button className="border rounded px-2 py-1 bg-blue-500 text-white">Go</button>
          </div>
        </div>
        
        <div className="flex flex-col col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <label htmlFor="checkboxes" className="mb-2">Options</label>
          <div id="checkboxes" className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <input id="checkbox-1" type="checkbox" className="form-checkbox" />
              <label htmlFor="checkbox-1">Commission Points</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="checkbox-2" type="checkbox" className="form-checkbox" />
              <label htmlFor="checkbox-2">User BSO</label>
            </div>
            <div className="flex items-center space-x-2">
              <input id="checkbox-3" type="checkbox" className="form-checkbox" />
              <label htmlFor="checkbox-3">CPI</label>
            </div>
            <button onClick={handleGenerateReport} className="ml-auto border rounded px-4 py-2 bg-blue-500 text-white">Generate Report</button>
          </div>
        </div>
       
      </div>
      {showTable && <Table />} {/* Render Table component only if showTable is true */}
      
    </div>
  );
};

export default GenerateRep;
