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
