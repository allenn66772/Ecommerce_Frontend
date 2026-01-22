import React from 'react'

function User_home() {
  return (
    <>
     
    <div className="min-h-screen bg-black text-white">

      {/* ================= CAROUSEL ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">New Arrivals</h1>
            <p className="mt-4 text-gray-300">
              Discover the latest collections
            </p>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Category 1 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Electronics"
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h3 className="text-xl font-semibold">Electronics</h3>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Fashion"
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h3 className="text-xl font-semibold">Fashion</h3>
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              alt="Footwear"
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h3 className="text-xl font-semibold">Footwear</h3>
            </div>
          </div>

          {/* Category 4 */}
          <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1518441902117-f5f47b6b0f76"
              alt="Accessories"
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h3 className="text-xl font-semibold">Accessories</h3>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TOP PICKS ================= */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Top Picks For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Product 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Smart Watch"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Smart Watch</h3>
            <p className="text-gray-400 mt-1">₹4,999</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1518441902117-f5f47b6b0f76"
              alt="Headphones"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Wireless Headphones
            </h3>
            <p className="text-gray-400 mt-1">₹2,999</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:scale-105 transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Shoes"
              className="h-56 w-full object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">Running Shoes</h3>
            <p className="text-gray-400 mt-1">₹3,499</p>
            <button className="mt-4 w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
              View Product
            </button>
          </div>

        </div>
      </section>

    </div>
    
    </>
  )
}

export default User_home