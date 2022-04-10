import Axios from "axios";

const apiClient = () => {
  const { REACT_APP_API_URL } = process.env;

  const axiosInstance = Axios.create({
    baseURL: REACT_APP_API_URL,
    responseType: "json",
  });

  return axiosInstance;
};

export default apiClient;
