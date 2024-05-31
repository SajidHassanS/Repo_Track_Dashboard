
import DefaultLayout from '../../layout/DefaultLayout'
import DataTable from './components/DataTable'
import PieChart from './components/PieChart'
import StoredVehicle from './components/StoredVehicle'
import TableRowww from './components/TableRow'
import TierForm from './components/TierForm'

const MyClients = () => {
  return (
    <>
     <DefaultLayout>
    <div className=''>

    <div className='dark:bg-[#090d28] bg-bodydark1'>

<TierForm/> 

</div>
<div>
<DataTable/>
</div>
<div>
  <TableRowww/>
</div>


    </div>
    <div className='flex flex-col md:flex-row mt-16  gap-10 '>
   <div className='dark:bg-[#090d28] bg-bodydark1 md:w-1/2 rounded-[25px] '>

   <PieChart />
   </div>
   <div className='dark:bg-[#090d28] bg-bodydark1 md:w-1/2 rounded-[25px] '>
   <StoredVehicle/>
   </div>

    </div>
    </DefaultLayout>
   
    </>
  )
}

export default MyClients