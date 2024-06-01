import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import ChartTwo from './components/ChartTwo'
import ChartOne from './components/ChartOne'
import ListChartFourColors from '../Repossessions/Components/ListChartFourColors'

const Branches = () => {
  return (
    <DefaultLayout>
      <div className='dark:bg-[#090d28] bg-bodydark1 grid grid-cols-6 rounded-2xl p-1 xl:p-5'>
        <ListChartFourColors />
        
        <div className="col-span-6 2xl:col-span-5 transition-transform transform hover:scale-110">
          <ChartOne />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Branches
