import { ServerRouter } from "react-router-dom";
import commonAPI from "./commonAPI";
import SERVERURL from "./serverURL";

// register
export const registerUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/register`, reqBody);
};

// login
export const loginUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVERURL}/login`, reqBody);
};




//admin

//Add Products
export const addProductAPI=async(reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/add-products`,reqBody)
}


//user


//get 3 products in home
export const getHomeProductAPI=async(reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/home-products`,{},reqHeader)
}
//get all-products 
export const getAllProductsAPI=async(reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-products`,{},reqHeader)
}
//view product
export const viewProductAPI=async(id,reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/view-product/${id}`,{},reqHeader)
}
//add to cart 
export const addToCartAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-to-cart`,reqBody,reqHeader)
}
//get to cart
export const getCartAPI=async(reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/get-from-cart`,{},reqHeader)
}
// update quantity
export const updateQtyAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/update-product-quantity`,reqBody,reqHeader)
}
// remove item
export const removeFromCartAPI = async (productId, reqHeader) => {
  return await commonAPI("DELETE",`${SERVERURL}/remove/${productId}`,{},reqHeader);
};