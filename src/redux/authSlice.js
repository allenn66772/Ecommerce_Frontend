import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI, registerUserAPI } from "../service/allAPI";
import { useNavigate } from "react-router-dom";

// register thunk
export const registerUser = createAsyncThunk(
  "auth/register", // ✅ FIXED (was "/register")
  async (reqBody, { rejectWithValue }) => {
    try {
      const res = await registerUserAPI(reqBody);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Register failed");
    }
  },
);

// login thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (reqBody, { rejectWithValue }) => {
    try {
      const res = await loginUserAPI(reqBody);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    token: null,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user")
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || action.payload || null; // ✅ FIX
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed"; // ✅ SAFE
      })

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        const user = action.payload.user || action.payload.existingUser;

        state.user = user;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("user", JSON.stringify(user));
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
