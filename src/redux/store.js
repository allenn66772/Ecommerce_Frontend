import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice"; // ✅ FIX: default reducer import

export const store = configureStore({
  reducer: {
    user: userReducer, // ✅ FIX: reducer function only
  },
});

export default store;
