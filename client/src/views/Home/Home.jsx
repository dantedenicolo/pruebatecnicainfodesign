import React from 'react'
import { Dashboard, SideBar } from '../../components'

const Home = () => {
  return (
    <div className='flex flex-row'>
      <div>
        <SideBar />
      </div>
      <div className='w-full px-10'>
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
