import axios from "axios";

export const getRegisterFetch = (values) => {
   return axios.post('http://localhost:3003/register', values)
}
