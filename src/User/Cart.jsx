import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, getCart, increaseQty, updateCartQty } from '../redux/cartSlice';
import SERVERURL from '../service/serverURL';

function Cart() {


 const dispatch=useDispatch()
 const {cartItems,loading}=useSelector((state)=>state.cart);
 const token=sessionStorage.getItem("token")
 const reqHeader={
  Authorization:`Bearer ${token}`
 }



 useEffect(()=>{
  if(token){
    dispatch(getCart(reqHeader))
    // dispatch(updateCartQty({productId,quantity,reqHeader}))
  }
 },[dispatch,token])

 console.log(cartItems);
 
 

  return (
    <>
    <div className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Your Cart
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= CART ITEMS ================= */}
        <section className="lg:col-span-2 space-y-6">

          {/* Cart Item 1 */}
         {cartItems.length>0 ? (cartItems.map((item)=>(
          <div className="flex gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <img
              src={`${SERVERURL}/imgUploads/${item.productId.uploadImages[0]}`}
              alt="Product"
              className="h-28 w-28 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {item.productId?.pname}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Color: Black
              </p>
              <p className="text-indigo-400 font-semibold mt-2">
                ₹{item.productId?.dprice}
              </p>
              <p className="text-indigo-400 font-semibold mt-2">
                {item.productId.description}
              </p>


              {/* Quantity */}
              <div className="flex items-center gap-4 mt-4">
                <button
                 onClick={() => {
    dispatch(decreaseQty(item.productId._id));
    dispatch(updateCartQty({
      productId: item.productId._id,
      quantity: item.quantity - 1,
      reqHeader
    }));
  }}
                 className="h-8 w-8 rounded-lg bg-white/10 border border-white/20">
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                 onClick={() => {
    dispatch(increaseQty(item.productId._id));
    dispatch(updateCartQty({
      productId: item.productId._id,
      quantity: item.quantity + 1,
      reqHeader
    }));
  }}
                 className="h-8 w-8 rounded-lg bg-white/10 border border-white/20">
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <button className="text-red-400 hover:text-red-500">
              Remove
            </button>
          </div>
          ) )) :
          <p>CArt is empty</p>
          }

         

        </section>

        {/* ================= ORDER SUMMARY ================= */}
        <aside className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 text-gray-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹7,998</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-400">− ₹500</span>
            </div>

            <hr className="border-white/20" />

            <div className="flex justify-between text-lg font-semibold text-white">
              <span>Total</span>
              <span>₹7,597</span>
            </div>
          </div>

          <button className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
            Proceed to Checkout
          </button>

        </aside>

      </div>
    </div>
    
    </>
  )
}

export default Cart