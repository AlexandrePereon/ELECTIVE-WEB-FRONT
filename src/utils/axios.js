import axios from "axios";

let refreshTokenRequest = null;

const getTokenFromSessionStorage = () => {
  let data = sessionStorage.getItem('token');
  if (data) {
      let dataObject = JSON.parse(data);
      if (new Date().getTime() < dataObject.expiration) {
          return dataObject.valeur;
      } else {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userInfos');
      }
  }
  return null;
};



const axiosReq = axios.create({
    baseURL: "http://app.localhost",
});

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
          const token = getTokenFromSessionStorage(); 
          if (error.response.status === 401 && !originalRequest._retry) {
            if (!refreshTokenRequest) {
              refreshTokenRequest = axiosReq.post('/auth/refresh', {
                refreshToken: sessionStorage.getItem('refreshToken'),
              });
            }
      
            try {
              const response = await refreshTokenRequest;
              const Token = response.data.accessToken;
      
              // Mettre à jour le jeton d'authentification dans le stockage local
              let dateExpiration = new Date().getTime() + (expirationTimeAsMinutes * 60 * 1000);
              sessionStorage.setItem('token', JSON.stringify({ valeur: Token, expiration: dateExpiration }));
      
              // Réessayer la requête originale avec le nouveau jeton
              originalRequest.headers.Authorization = `${Token}`;
              return axiosReq(originalRequest);
            } catch (refreshError) {
              console.log(refreshError)
              // Gérer les erreurs de rafraîchissement du jeton, par exemple, déconnecter l'utilisateur
              // Déconnecter l'utilisateur, vider les jetons d'authentification, rediriger, etc.
              // Vous pouvez personnaliser cette partie en fonction de vos besoins
              console.error('Erreur lors du rafraîchissement du jeton :', refreshError);
              // Déconnexion de l'utilisateur
              // rediriger vers la page de connexion
            } finally {
              refreshTokenRequest = null;
            }
          }
          return Promise.reject(error);
        }
      );

export {axiosReq,getTokenFromSessionStorage};