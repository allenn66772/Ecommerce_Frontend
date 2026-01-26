import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductAPI, getHomeProductAPI } from "../service/allAPI";

// add-product thunk
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (reqBody, { rejectWithValue }) => {
    try {
      const result = await addProductAPI(reqBody);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error happened");
    }
  }
);

//get-product thunk
export const getHomeProduct=createAsyncThunk(
  "products/home-products",
  async(reqHeader,{rejectWithValue})=>{
    try{
      const result=await getHomeProductAPI(reqHeader)
      return result.data
    }catch (error){
     return rejectWithValue(error.response?.data || "something went wrong")
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // add product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // ✅ FIX
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get home products
      .addCase(getHomeProduct.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(getHomeProduct.fulfilled,(state,action)=>{
        state.loading=true;
        state.products=action.payload
        
      })
      .addCase(getHomeProduct.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
      })
  },
});

export const { clearProductError } = productSlice.actions;
export default productSlice.reducer;
