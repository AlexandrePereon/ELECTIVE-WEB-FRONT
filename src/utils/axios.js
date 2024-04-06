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
          sessionStorage.removeItem('userInfos');
          sessionStorage.removeItem('refreshToken');
          window.location.href= "/login";
      }
  }
  return null;
};


const axiosReq = axios.create({baseURL: "http://app.localhost"});
let refreshTokenRequest = null;
const {logout} = useLogOut();

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
    const originalRequest = error.config;
    console.log(originalRequest)
    if (error.response.status === 401 && !originalRequest._retry) {
      if (!refreshTokenRequest) {
        refreshTokenRequest = axiosReq.post('/auth/refresh', {
          refreshToken: sessionStorage.getItem('refreshToken'),
        });
      }

      try {
        const response = await refreshTokenRequest;
        const Token = response.data.token;
        let dateExpiration = new Date().getTime() + (15 * 60 * 1000);
        sessionStorage.setItem('token', JSON.stringify({ valeur: Token, expiration: dateExpiration }));
        originalRequest.headers.Authorization = `${Token}`;
        return axiosReq(originalRequest);
      } catch (refreshError) {
        console.error('Erreur lors du rafraîchissement du jeton :', refreshError);
        logout();
      } finally {
        refreshTokenRequest = null;
      }
    }

    return Promise.reject(error);
  }
);

export {axiosReq,getTokenFromSessionStorage};