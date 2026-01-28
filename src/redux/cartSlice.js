import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartAPI, getCartAPI, updateQtyAPI } from "../service/allAPI";



//add to cart thunk
export const addToCart=createAsyncThunk(
    "carts/addToCart",
    async ({reqBody,reqHeader},{rejectWithValue})=>{
   try {
       const result=await addToCartAPI(reqBody,reqHeader)
       alert("product added success fully")
       return result.data
    
   } catch (error) {
    return rejectWithValue(error.response?.data || "ERRROR Happened")
    
    
   }
    }
)

//get products in cart
export const getCart=createAsyncThunk(
    "carts/getCart",
    async(reqHeader,{rejectWithValue})=>{
        try {
            const result=await getCartAPI(reqHeader)
            return result.data
        } catch (error) {
           return rejectWithValue(error.response?.data ||"Something went wrong") 
        }
    }
)

// update quantity
export const updateCartQty=createAsyncThunk(
    "carts/update-product-quantity",
    async({productId,quantity,reqHeader},{rejectWithValue})=>{
        try {
            const result=await updateQtyAPI(reqHeader)
            result.status(200).json(result)
            
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to update quantity")
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
        increaseQty:(state,action)=>{
            const item=state.cartItems.find(
                (i)=>i.productId._id ===action.payload
            )
            if(item){
                item.quantity +=1
            }
        },
       decreaseQty: (state, action) => {
    const item = state.cartItems.find(
      i => i.productId._id === action.payload
    );
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  }

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
        // get Cart
        .addCase(getCart.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(getCart.fulfilled,(state,action)=>{
            state.loading=false;
            state.cartItems=action.payload
        })
        .addCase(getCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })
        //update Qty
        .addCase(updateCartQty.fulfilled,(state,action)=>{
            state.loading=false;
            state.cartItems=action.payload
        })
    }
})

export const {clearCart,increaseQty,decreaseQty}=cartSlice.actions
export default cartSlice.reducer