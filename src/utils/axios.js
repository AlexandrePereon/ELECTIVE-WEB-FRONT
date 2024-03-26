import axios from "axios";

const getTokenFromSessionStorage = () => {
  // Récupérer les données depuis sessionStorage
  var données = sessionStorage.getItem('token');
  // Si les données existent
  if (données !== null) {
      // Parser les données JSON
      var donnéesObjet = JSON.parse(données);
      // Si la date d'expiration n'est pas encore atteinte
      if (new Date().getTime() < donnéesObjet.expiration) {
          // Retourner la valeur
          return donnéesObjet.valeur;
      } else {
          // Supprimer les données expirées de sessionStorage
          sessionStorage.removeItem('token');
      }
  }
  return null; // Retourner null si les données sont expirées ou inexistantes
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
      

export default axiosReq;