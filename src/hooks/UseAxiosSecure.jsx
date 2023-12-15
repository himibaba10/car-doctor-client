import axios from "axios";

const securedAxios = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  return securedAxios;
};

export default UseAxiosSecure;
