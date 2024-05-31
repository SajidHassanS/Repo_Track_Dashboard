import React from 'react';
import { RxCross1 } from "react-icons/rx";
interface TableRow {
  id: number;
  tierId: string;
  rdn: string;
  jobType: string;
  placement: string;
  commission: string;
  amount: string;
  notes: string;
  smartAssign: string;
  rejectionWaterfall: string;
  acceptedWaterfall: string;
  waterfallDays: string;
}

const data: TableRow[] = [
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  {
    id: 1,
    tierId: 'A1',
    rdn: '36487398',
    jobType: '120.00',
    placement: '1.0',
    commission: '$599.42',
    amount: 'View',
    notes: 'Y',
    smartAssign: 'Y',
    rejectionWaterfall: 'Y',
    acceptedWaterfall: 'Y',
    waterfallDays: '30',
  },
  // Add more rows as needed
];

const DataTable: React.FC = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <div className=" p-5 rounded-2xl mb-5">
        <div className="w-full justify-between items-center ">
          <h3 className="font-bold text-title-lg text-black dark:text-white">Existing Client tier mapping</h3>
          <p className="mt-3"> Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
        </div>
      </div>
      <table className="min-w-full dark:bg-[#090d28] bg-bodydark1">
        <thead>
          <tr className="w-full text-left dark:bg-[#090d28] bg-bodydark1 text-black dark:text-white">
            <th className="p-2"><input type="checkbox" /></th>
            <th className="p-2">Tier ID</th>
            <th className="p-2">RDN</th>
            <th className="p-2">Job Type</th>
            <th className="p-2">Placement</th>
            <th className="p-2">Commission</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Notes</th>
            <th className="p-2">Smart Assign</th>
            <th className="p-2">Rejection Waterfall</th>
            <th className="p-2">Accepted Waterfall</th>
            <th className="p-2">Waterfall Days</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-black dark:text-white bg-myTable even:bg-myTable">
              <td className="p-2"><RxCross1 /></td>
              <td className="p-2">{row.tierId}</td>
              <td className="p-2">{row.rdn}</td>
              <td className="p-2">{row.jobType}</td>
              <td className="p-2">{row.placement}</td>
              <td className="p-2">{row.commission}</td>
              <td className="p-2">{row.amount}</td>
              <td className="p-2">{row.notes}</td>
              <td className="p-2">{row.smartAssign}</td>
              <td className="p-2">{row.rejectionWaterfall}</td>
              <td className="p-2">{row.acceptedWaterfall}</td>
              <td className="p-2">{row.waterfallDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
