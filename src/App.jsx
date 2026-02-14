import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Navbar/>
      <main >
        <Outlet/>
      </main>
    </>
  )
  //className='h-screen flex justify-center items-center'
}

export default App