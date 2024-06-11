import React from 'react';

// Generate random date between two dates
function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Generate random number between two numbers
function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate random string of given length
function randomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Table: React.FC = () => {
  // Generate random data for each row
  const data = Array.from({ length: 7 }, (_, rowIndex) => ({
    caseNumber: `Case ${rowIndex + 1}`,
    bsoDate: randomDate(new Date(2020, 0, 1), new Date()).toDateString(),
    repoDate: randomDate(new Date(2020, 0, 1), new Date()).toDateString(),
    bsoType: randomString(5),
    hitType: randomString(5),
    client: randomString(8),
    classification: randomString(8),
    status: randomString(6),
    location: randomString(10),
    department: randomString(8),
    priority: randomString(4),
    assignedTo: randomString(10),
    resolvedDate: randomDate(new Date(2020, 0, 1), new Date()).toDateString(),
    resolutionType: randomString(5),
    comments: randomString(12),
  }));

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 whitespace-nowrap">Case Number</th>
            <th className="px-4 py-2 whitespace-nowrap">BSO Date</th>
            <th className="px-4 py-2 whitespace-nowrap">Repo Date</th>
            <th className="px-4 py-2 whitespace-nowrap">BSO Type</th>
            <th className="px-4 py-2 whitespace-nowrap">Hit Type</th>
            <th className="px-4 py-2 whitespace-nowrap">Client</th>
            <th className="px-4 py-2 whitespace-nowrap">Classification</th>
            <th className="px-4 py-2 whitespace-nowrap">Debtor</th>
            <th className="px-4 py-2 whitespace-nowrap">Year Make</th>
            <th className="px-4 py-2 whitespace-nowrap">Day Worked</th>
            <th className="px-4 py-2 whitespace-nowrap">VIN</th>
            <th className="px-4 py-2 whitespace-nowrap">Lein Fee</th>
            <th className="px-4 py-2 whitespace-nowrap">Total bill</th>
            <th className="px-4 py-2 whitespace-nowrap">Total cost</th>
            <th className="px-4 py-2 whitespace-nowrap">Net profit</th>
            <th className="px-4 py-2 whitespace-nowrap">Investigator</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over data and render rows */}
          {data.map((rowData, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2 w-1/14">{rowData.caseNumber}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.bsoDate}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.repoDate}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.bsoType}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.hitType}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.client}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.classification}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.status}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.location}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.department}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.priority}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.assignedTo}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.resolvedDate}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.resolutionType}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.comments}</td>
              <td className="border px-4 py-2 w-1/14">{rowData.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
