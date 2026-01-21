import React from 'react'
import Auth from './Common/Auth'
import { Route, Routes } from 'react-router-dom'
import Admin_dashboard from './Admin/Admin_dashboard'
import Landingpage from './Common/Landingpage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Auth/>}/>
     <Route path="/register" element={<Auth register />}/>

     {/* Admin */}
     <Route path='/admin-home' element={<Admin_dashboard/>}/>

     {/* Common */}
     <Route path='/' element={<Landingpage/>}/>


    </Routes>
    </>
  )
}

export default App