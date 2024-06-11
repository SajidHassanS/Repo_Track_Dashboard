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
  }));

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Case Number</th>
            <th className="px-4 py-2">BSO Date</th>
            <th className="px-4 py-2">Repo Date</th>
            <th className="px-4 py-2">BSO Type</th>
            <th className="px-4 py-2">Hit Type</th>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Classification</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over data and render rows */}
          {data.map((rowData, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{rowData.caseNumber}</td>
              <td className="border px-4 py-2">{rowData.bsoDate}</td>
              <td className="border px-4 py-2">{rowData.repoDate}</td>
              <td className="border px-4 py-2">{rowData.bsoType}</td>
              <td className="border px-4 py-2">{rowData.hitType}</td>
              <td className="border px-4 py-2">{rowData.client}</td>
              <td className="border px-4 py-2">{rowData.classification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
