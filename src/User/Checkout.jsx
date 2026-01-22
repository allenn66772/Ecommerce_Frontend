import React from 'react'

function Checkout() {
  return (
    <>
     <div className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT SIDE ================= */}
        <section className="lg:col-span-2 space-y-8">

          {/* ================= ADDRESS FORM ================= */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
              Shipping Address
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="sm:col-span-2 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="House / Flat / Building"
                className="sm:col-span-2 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Street / Area"
                className="sm:col-span-2 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="City"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="State"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <select className="px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Address Type</option>
                <option>Home</option>
                <option>Work</option>
              </select>
            </div>
          </div>

          {/* ================= PAYMENT METHOD ================= */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
              Payment Method
            </h2>

            <div className="space-y-4 text-gray-300">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" className="accent-indigo-600" />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" className="accent-indigo-600" />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" className="accent-indigo-600" />
                UPI / Wallets
              </label>
            </div>
          </div>

        </section>

        {/* ================= ORDER SUMMARY ================= */}
        <aside className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 text-gray-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹4,999</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-400">− ₹300</span>
            </div>

            <hr className="border-white/20" />

            <div className="flex justify-between text-lg font-semibold text-white">
              <span>Total</span>
              <span>₹4,798</span>
            </div>
          </div>

          <button className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
            Place Order
          </button>

        </aside>

      </div>
    </div>
    
    
    </>
  )
}

export default Checkout