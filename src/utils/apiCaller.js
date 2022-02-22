import axios from "axios";

export const registerFetch = (values) => {
   return axios.post('http://localhost:3003/register', values)
}

export const loginFetch = (values) => {
   return axios.post('http://localhost:3003/login', values)
}
