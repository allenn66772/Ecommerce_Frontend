import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice"; // ✅ FIX: default reducer import
import productReducer from "./productSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    products:productReducer
  
  }
});

export default store;
