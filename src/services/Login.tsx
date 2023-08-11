import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_API_URL;

export const login = async (user: any) => {
  console.log(URL);
  
  const response = await axios.post(`${URL}user`, user);
  return response;
};
