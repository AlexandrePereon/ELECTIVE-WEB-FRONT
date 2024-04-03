/**
 * Hook authentication data.
 * 
 * @typedef useAuthentication
 * @kind hook
 * 
 * @returns {object} - Les informations de l'utilisateur connecté.
 */

const useAuthentication = () => {

    const getUserInfosFromSessionStorage = () => {
      return JSON.parse(sessionStorage.getItem('userInfos'));
    };
  
    const saveUserDataToSessionStorage = (token, userInfos, refreshToken) => {
        let dateExpiration = new Date().getTime() + (60 * 60 * 1000);
        sessionStorage.setItem('token', JSON.stringify({ valeur: token, expiration: dateExpiration }));
        sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
        sessionStorage.setItem('refreshToken', refreshToken);
        console.log(token)
        console.log(userInfos)
        console.log(refreshToken)
      };
    
     return { saveUserDataToSessionStorage, getUserInfosFromSessionStorage }
}

export default useAuthentication;