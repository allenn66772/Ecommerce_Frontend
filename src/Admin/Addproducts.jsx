import React from 'react'

function Addproducts() {
  return (
    <>
       <div className="min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl bg-[#111] border border-gray-800 rounded-2xl shadow-xl p-8">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-white mb-8">
          Add New Product
        </h2>

        <form className="space-y-6">

          {/* Product Name */}
          <input
            type="text"
            placeholder="Product Name"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Description */}
          <textarea
            placeholder="Short Description"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-20 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          {/* Product Description */}
          <textarea
            placeholder="Detailed Product Description"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-28 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          {/* Prices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="Price"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Discount Price"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Discount (%)"
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Highlights */}
          <textarea
            placeholder="Product Highlights (one per line)"
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-3 h-28 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

         

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Add Product
            </button>

            <button
              type="button"
              className="flex-1 bg-[#1a1a1a] border border-gray-700 hover:border-gray-500 text-white py-3 rounded-xl font-semibold transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
    
    </>
  )
}

export default Addproducts