import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import ChartFive from '../../components/Charts/ChartFive';
import ChartSix from '../../components/Charts/ChartSix';

const Finance: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">
        <div className="transition-transform transform hover:scale-110">
          <CardDataStats title1="Year to Date" graphColor="#3f2279" title2="Previous WTD" title3="Change" rate1="+0.3%" rate2="30" rate3="0-90.0%|-27" graphData={[31, 0, 28, 1, 42, 5, 77]} graphValue="132" levelUp />
        </div>
        <div className="transition-transform transform hover:scale-110">
          <CardDataStats title1="Year to Date" graphColor="#80676d" title2="Previous WTD" title3="Change" rate1="+0.4%" rate2="30" rate3="0-90.0%|-27" graphData={[3, 0, 28, 51, 2, 85, 77]} graphValue="13" levelUp />
        </div>
        <div className="transition-transform transform hover:scale-110">
          <CardDataStats title1="Year to Date" graphColor="#214746" title2="Previous WTD" title3="Change" rate1="+0.5%" rate2="30" rate3="0-90.0%|-27" graphData={[5, 40, 28, 1, 42, 5, 7]} graphValue="12" levelUp />
        </div>
        <div className="transition-transform transform hover:scale-110">
          <CardDataStats title1="Year to Date" graphColor="#60655f" title2="Previous WTD" title3="Change" rate1="+0.3%" rate2="30" rate3="0-90.0%|-27" graphData={[8, 0, 8, 51, 42, 85, 77]} graphValue="32" levelUp />
        </div>
        <div className="transition-transform transform hover:scale-110">
          <CardDataStats title1="Year to Date" graphColor="#60655f" title2="Previous WTD" title3="Change" rate1="+0.3%" rate2="30" rate3="0-90.0%|-27" graphData={[8, 0, 8, 51, 42, 85, 77]} graphValue="32" levelUp />
        </div>
      </div>
      <div className='my-8 transition-transform transform hover:scale-110'>
        <ChartSix />
      </div>
    </DefaultLayout>
  );
};

export default Finance;
