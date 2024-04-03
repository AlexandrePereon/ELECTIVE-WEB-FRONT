import axios from "axios";

const getTokenFromSessionStorage = () => {
  let data = sessionStorage.getItem('token');
  if (data) {
      let dataObject = JSON.parse(data);
      if (new Date().getTime() < dataObject.expiration) {
          return dataObject.valeur;
      } else {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userInfos');
          window.location.href='/login';
      }
  }
  return null;
};

const axiosReq = axios.create({baseURL: "http://app.localhost"});

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
      

export default axiosReq;