import React from 'react'
import Options from '../../components/Options'
import Column from '../../components/charts/Column'
import Pie from '../../components/charts/Pie'
import Items from '../../components/admin/Items'
import Staff from '../../components/Staff'
import { topSellingAndGrossingItems } from '../../data/dummy'

const Marketing = () => {
  return (
    <div className='p-6 min-h-screen'>
      <div className="">
        <Options />
      </div>
      <div className="flex mb-6 gap-6 flex-wrap lg:flex-nowrap justify-between">
        <div className="w-full">
          <Column />
        </div>
        <div className="w-full">
          <Pie />
        </div>
      </div>
      <div className='w-full gap-6 lg:flex-nowrap flex-wrap flex justify-between'>
        {
          topSellingAndGrossingItems.map((date) => {
            return <Items array={date} />
          })
        }
      </div>
      <div className="w-full my-6">
        <Staff />
      </div>
    </div>
  )
}

export default Marketing