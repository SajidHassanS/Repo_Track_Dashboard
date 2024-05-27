
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

    <div className='bg-lightBlue'>

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
   <div className='bg-darkBlue md:w-1/2 rounded-[25px] '>

   <PieChart />
   </div>
   <div className='bg-darkBlue md:w-1/2 rounded-[25px] '>
   <StoredVehicle/>
   </div>

    </div>
    </DefaultLayout>
   
    </>
  )
}

export default MyClients