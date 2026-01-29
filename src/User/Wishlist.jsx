import React from 'react'
import Header from '../Common/components/Header'
import { useDispatch } from 'react-redux'

function Wishlist() {


  return (
    <>
    <Header/>
     <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">
          My Wishlist
        </h1>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569"
              alt="Product"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1">
                Apple iPhone 15
              </h2>
              <p className="text-green-600 font-bold mb-4">
                ₹79,999
              </p>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Add to Cart
                </button>

                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a41552231693"
              alt="Product"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1">
                Sony Headphones
              </h2>
              <p className="text-green-600 font-bold mb-4">
                ₹12,999
              </p>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Add to Cart
                </button>

                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product"
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-1">
                Smart Watch
              </h2>
              <p className="text-green-600 font-bold mb-4">
                ₹4,999
              </p>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Add to Cart
                </button>

                <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Wishlist