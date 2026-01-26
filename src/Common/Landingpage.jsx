import React from 'react'
import { FaShieldAlt, FaShoppingBag, FaTruck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from './components/Header'

function Landingpage() {
  return (
    <>
     <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Navbar */}
      <Header/>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-extrabold leading-tight">
          The Best Place to <br /> Buy Everything
        </h2>
        <p className="text-gray-400 mt-6 max-w-xl">
          Discover amazing products, exclusive deals, and fast delivery
          — all in one place.
        </p>
        <button className="mt-8 bg-indigo-600 px-8 py-3 rounded-xl text-lg hover:bg-indigo-700">
          Shop Now
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
        
        <div className="bg-white/5 p-8 rounded-xl text-center">
          <FaShoppingBag size={40} className="mx-auto text-indigo-500" />
          <h3 className="mt-4 text-xl font-semibold">Wide Products</h3>
          <p className="text-gray-400 mt-2">
            Thousands of products in all categories.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl text-center">
          <FaTruck size={40} className="mx-auto text-indigo-500" />
          <h3 className="mt-4 text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-400 mt-2">
            Quick and reliable doorstep delivery.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-xl text-center">
          <FaShieldAlt size={40} className="mx-auto text-indigo-500" />
          <h3 className="mt-4 text-xl font-semibold">Secure Payments</h3>
          <p className="text-gray-400 mt-2">
            100% secure and trusted transactions.
          </p>
        </div>

      </section>
    </div>
    
    </>
  )
}

export default Landingpage