import React, { useState } from 'react';

interface TableRow {
  id: number;
  clientName: string;
  totalOrders: number;
  totalRepos: number;
  totalRevenue: string;
}

const data: TableRow[] = [
  { id: 1, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 2, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 3, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 4, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 5, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 6, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 7, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 8, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 9, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  { id: 10, clientName: 'John Deo', totalOrders: 36, totalRepos: 36, totalRevenue: '$723' },
  // Add more rows as needed
];

const TableRowww: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3 justify-center md:justify-between mb-4">
        <div className='flex gap-6' >
          <button className="bg-green-500 text-black dark:text-white py-2 px-4 rounded-full">Client details</button>
          <button className="dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white py-2 px-4 rounded-full">Agent details</button>
        </div>
        <div className="flex space-x-4">
          <div className="relative group">
            <button className="dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white py-2 px-4 rounded-full">Compare</button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-xl hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Option 1</a>
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Option 2</a>
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Option 3</a>
            </div>
          </div>
          <div className="relative group">
            <button className="dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white py-2 px-4 rounded-full">Date Filter</button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-xl hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Last 7 Days</a>
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Last 30 Days</a>
              <a href="#" className="block px-4 py-2 text-darkBlue hover:bg-gray-200">Last Year</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-black dark:text-white mb-4">Client Details In Last 30 Days</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full dark:bg-[#090d28] bg-bodydark1">
          <thead>
            <tr className="text-left text-black dark:text-white">
              <th className="p-2">Client name</th>
              <th className="p-2">Total Orders</th>
              <th className="p-2">Total Repossessions</th>
              <th className="p-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="bg-myTable text-black dark:text-white">
                <td className="p-2">{row.clientName}</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-full h-4 bg-green-500 mr-2"></div> 
                    <span>{row.totalOrders}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-full h-4 bg-orange-500 mr-2"></div> 
                    <span>{row.totalRepos}</span>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="w-full h-4 bg-yellow-500 mr-2"></div> 
                    <span>{row.totalRevenue}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-600' : 'dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white'}`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-red-500 text-black dark:text-white' : 'dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-600' : 'dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white'}`}
          >
            Next
          </button>
        </div>
        <div>
          <span className="text-black dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableRowww;
