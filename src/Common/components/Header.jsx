import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/authSlice'

function Header() {



 
const dispatch=useDispatch()
const  {user,isAuthenticated}=useSelector((state)=>state.user)
// console.log("HEADER AUTH STATE:", { user, isAuthenticated });

  return (
    <>
        <header className="w-full bg-gradient-to-b from-[#050B18] to-[#020617] border-b border-white/10">
      <div className="relative w-full mx-auto px-6 py-4 flex items-center">
        
        {/* Left - Logo */}
        <h1 className="text-white text-xl font-semibold">
          ShopEase
        </h1>

        {/* Center - Nav */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-white/90">
          <Link className="hover:text-white transition" to="/home">Home</Link>
          <Link className="hover:text-white transition" to="/all-products">Products</Link>
          <Link className="hover:text-white transition" to="/about">About</Link>
          <Link className="hover:text-white transition" to="/contact">Contact</Link>
        </nav>

        {/* Right - Profile + Login */}
        <div className="ml-auto flex items-center gap-4">
          
          {/* Profile Section */}
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 
                          flex items-center justify-center cursor-pointer 
                          hover:bg-white/20 transition">
            <span className="text-white text-sm font-medium">
              A
            </span>
          </div>

          {/* Login Button */}
          
        {isAuthenticated ? (
            <button
             onClick={()=>dispatch(logout())}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 
                       text-white px-5 py-2 rounded-lg font-medium 
                       hover:opacity-90 transition"
          >
            Logout
          </button>
        ):
         <Link
            to="/login"
            className="bg-gradient-to-r from-indigo-500 to-blue-600 
                       text-white px-5 py-2 rounded-lg font-medium 
                       hover:opacity-90 transition"
          >
            Login
          </Link>
         }

        </div>
      </div>
    </header>
    </>
  )
}

export default Header