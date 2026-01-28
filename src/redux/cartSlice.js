import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartAPI } from "../service/allAPI";



//add to cart thunk
export const addToCart=createAsyncThunk(
    "carts/addToCart",
    async (reqBody,reqHeader,{rejectWithValue})=>{
   try {
       const result=await addToCartAPI(reqBody,reqHeader)
       return result.data
   } catch (error) {
    return rejectWithValue(error.response?.data || "ERRROR Happened")
    
   }
    }
)

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
        loading:false,
        error:null,
    },
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[]
        },

    },
    extraReducers:(builder)=>{
        builder
        // add to cart
        .addCase(addToCart.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading=false;
            state.cartItems=action.payload;
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})

export const {clearCart}=cartSlice.actions
export default cartSlice.reducer