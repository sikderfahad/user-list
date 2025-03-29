import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://reqres.in",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
