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