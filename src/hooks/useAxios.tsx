import axios from "axios";

const useAxios = () => {
  const axiosBase = axios.create({
    baseURL: "http://localhost:6543",
  });

  return axiosBase;
};

export default useAxios;
