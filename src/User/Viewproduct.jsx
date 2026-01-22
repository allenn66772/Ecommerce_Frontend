import React from 'react'

function Viewproduct() {
  return (
    <>
     <div className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ================= PRODUCT IMAGE ================= */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Product"
            className="w-full h-112.5 object-cover rounded-xl"
          />

          {/* Thumbnail Images */}
          <div className="flex gap-4 mt-6">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              className="h-20 w-20 object-cover rounded-lg border border-white/20 cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1518441902117-f5f47b6b0f76"
              className="h-20 w-20 object-cover rounded-lg border border-white/20 cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              className="h-20 w-20 object-cover rounded-lg border border-white/20 cursor-pointer"
            />
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div>

          <h1 className="text-4xl font-bold mb-4">
            Smart Watch Series X
          </h1>

          <p className="text-gray-400 mb-6">
            Premium wearable technology designed to keep you connected,
            healthy, and active throughout your day.
          </p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-indigo-400">
              ₹4,999
            </span>
            <span className="text-gray-500 line-through">
              ₹6,999
            </span>
            <span className="text-green-400 font-semibold">
              28% OFF
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6 text-yellow-400">
            ⭐⭐⭐⭐☆
            <span className="text-gray-400 text-sm">
              (245 ratings)
            </span>
          </div>

          {/* Options */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Available Colors
            </h3>
            <div className="flex gap-4">
              <span className="h-8 w-8 rounded-full bg-black border border-white/30 cursor-pointer"></span>
              <span className="h-8 w-8 rounded-full bg-gray-400 cursor-pointer"></span>
              <span className="h-8 w-8 rounded-full bg-indigo-500 cursor-pointer"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
              Add to Cart
            </button>
            <button className="flex-1 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition font-semibold">
              Buy Now
            </button>
          </div>

          {/* Product Highlights */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">
              Product Highlights
            </h3>
            <ul className="space-y-2 text-gray-400 list-disc list-inside">
              <li>AMOLED Display</li>
              <li>Heart Rate & Sleep Tracking</li>
              <li>7 Days Battery Life</li>
              <li>Water Resistant</li>
              <li>Bluetooth & GPS Support</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="max-w-6xl mx-auto mt-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">
          Product Description
        </h2>
        <p className="text-gray-400 leading-relaxed">
          The Smart Watch Series X is designed for those who want to stay
          connected and healthy without compromising on style. Featuring a
          vibrant AMOLED display, advanced fitness tracking, and long-lasting
          battery life, this smartwatch is your perfect everyday companion.
        </p>
      </div>

    </div>
    
    
    </>
  )
}

export default Viewproduct