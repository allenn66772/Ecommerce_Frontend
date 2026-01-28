import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice"; // ✅ FIX: default reducer import
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    products:productReducer,
    cart:cartReducer
  
  }
});

export default store;
