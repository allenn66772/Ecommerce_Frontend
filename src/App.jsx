import React from 'react'
import Auth from './Common/Auth'
import { Route, Routes } from 'react-router-dom'
import Admin_dashboard from './Admin/Admin_dashboard'
import Landingpage from './Common/Landingpage'
import User_home from './User/User_home'
import Allproducts from './User/Allproducts'
import Viewproduct from './User/Viewproduct'
import Cart from './User/Cart'
import Checkout from './User/Checkout'

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

     {/* user */}
     <Route path='/home' element={<User_home/>}/>
     <Route path='/all-products' element={<Allproducts/>}/>
     <Route path='/view' element={<Viewproduct/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </>
  )
}

export default App