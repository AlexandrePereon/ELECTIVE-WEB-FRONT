import axios from "axios";
import useLogOut from "../hooks/useLogOut";

const getTokenFromSessionStorage = () => {
  let data = sessionStorage.getItem('token');
  if (data) {
      let dataObject = JSON.parse(data);
      if (new Date().getTime() < dataObject.expiration) {
          return dataObject.valeur;
      } else {
          sessionStorage.removeItem('token');
      }
  }
  return null;
};

const axiosReq = axios.create({baseURL: process.env.REACT_APP_API_URL });
let refreshTokenRequest = null;

axiosReq.interceptors.request.use(
  (config) => {
    const token = getTokenFromSessionStorage();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
      
axiosReq.interceptors.response.use(
  (response) => response,
  async (error) => {  
    const {logout} = useLogOut();
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (!refreshTokenRequest) {
        refreshTokenRequest = axiosReq.post(`${process.env.REACT_APP_API_PREFIX_AUTH}refresh`, {
          refreshToken: sessionStorage.getItem('refreshToken'),
        });
        try {
          const response = await refreshTokenRequest;
          if(response){
            sessionStorage.setItem('token', JSON.stringify({ valeur: response.data.token, expiration: new Date().getTime() + (15 * 60 * 1000) }));
            originalRequest.headers.Authorization = response.data.token;
            return axiosReq(originalRequest);
          }
        } catch (error) {
          logout();
        } finally {
          refreshTokenRequest = null;
        }
      }
      
    }

    return Promise.reject(error);
  }
);

export {axiosReq,getTokenFromSessionStorage};