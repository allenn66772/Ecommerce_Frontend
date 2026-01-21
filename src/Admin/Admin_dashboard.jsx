import React from 'react'
import {FaBox,FaUsers,FaShoppingCart,FaDollarSign,} from "react-icons/fa";

function Admin_dashboard() {
  return (
    <>
     <div className="min-h-screen flex bg-gray-950 text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/10 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>
        <ul className="space-y-5 text-gray-400">
          <li className="hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-white cursor-pointer">Products</li>
          <li className="hover:text-white cursor-pointer">Orders</li>
          <li className="hover:text-white cursor-pointer">Users</li>
          <li className="hover:text-white cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700">
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-white/5 p-6 rounded-xl">
            <FaBox className="text-indigo-500 mb-3" size={30} />
            <h3 className="text-gray-400">Products</h3>
            <p className="text-2xl font-bold">120</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <FaShoppingCart className="text-indigo-500 mb-3" size={30} />
            <h3 className="text-gray-400">Orders</h3>
            <p className="text-2xl font-bold">540</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <FaUsers className="text-indigo-500 mb-3" size={30} />
            <h3 className="text-gray-400">Customers</h3>
            <p className="text-2xl font-bold">320</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <FaDollarSign className="text-indigo-500 mb-3" size={30} />
            <h3 className="text-gray-400">Revenue</h3>
            <p className="text-2xl font-bold">$12,500</p>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white/5 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-gray-400 border-b border-white/10">
                <tr>
                  <th className="py-3">Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-3">#1021</td>
                  <td>John Doe</td>
                  <td>Delivered</td>
                  <td>$120</td>
                </tr>
                <tr>
                  <td className="py-3">#1022</td>
                  <td>Jane Smith</td>
                  <td>Pending</td>
                  <td>$75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
    
    </>
  )
}

export default Admin_dashboard