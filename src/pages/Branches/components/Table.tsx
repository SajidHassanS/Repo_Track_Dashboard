import React from 'react';

// Generate random date between two dates
function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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

  const columns = [
    { Header: 'Case Number', accessor: 'caseNumber' },
    { Header: 'BSO Date', accessor: 'bsoDate' },
    { Header: 'Repo Date', accessor: 'repoDate' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full xl:w-[400px] 2xl:w-[400px]">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column) => (
              <th key={column.accessor} className="px-4 py-2" style={{ width: '30px' }}>
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center">
              {columns.map((column) => (
                <td key={column.accessor} className="border px-4 py-2" style={{ width: '30px' }}>
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
