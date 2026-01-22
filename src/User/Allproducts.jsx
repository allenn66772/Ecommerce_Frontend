import React from 'react'

function Allproducts() {
  return (
    <>
     <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* ================= PAGE TITLE ================= */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        All Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ================= FILTER SIDEBAR ================= */}
        <aside className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-fit">

          <h2 className="text-xl font-semibold mb-6">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Category
            </h3>
            <div className="space-y-2 text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                Electronics
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                Fashion
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                Footwear
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                Accessories
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Price Range
            </h3>
            <div className="space-y-2 text-gray-400">
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-indigo-600" />
                Under ₹1,000
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-indigo-600" />
                ₹1,000 – ₹3,000
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-indigo-600" />
                ₹3,000 – ₹5,000
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-indigo-600" />
                Above ₹5,000
              </label>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Customer Rating
            </h3>
            <div className="space-y-2 text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                ⭐⭐⭐⭐ & above
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                ⭐⭐⭐ & above
              </label>
            </div>
          </div>
        </aside>

        {/* ================= PRODUCTS GRID ================= */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Product Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Smart Watch</h3>
            <p className="text-gray-400 mt-1">₹4,999</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1518441902117-f5f47b6b0f76"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Wireless Headphones
            </h3>
            <p className="text-gray-400 mt-1">₹2,999</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>


          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>


          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>


          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>


          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

        </section>
      </div>
    </div>
    
    </>
  )
}

export default Allproducts