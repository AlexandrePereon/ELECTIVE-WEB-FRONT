import axios from "axios";

const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };

const axiosReq = axios.create({
    baseURL: "http://app.localhost",
    });

    axiosReq.interceptors.request.use(
        (config) => {
          const token = getTokenFromLocalStorage(); 

          if (token) {
            config.headers.Authorization = token;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      

export default axiosReq;