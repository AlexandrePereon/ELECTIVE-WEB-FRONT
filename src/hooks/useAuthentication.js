/**
 * Hook authentication data.
 * 
 * @typedef useAuthentication
 * @kind hook
 * 
 * @returns {object} - Les informations de l'utilisateur connecté.
 */
const useAuthentication = (userData) => {

    const saveUserDataToSessionStorage = (token, userInfos, expirationTimeAsMinutes) => {
      console.log(userInfos)
        let dateExpiration = new Date().getTime() + (expirationTimeAsMinutes * 60 * 1000);
        sessionStorage.setItem('token', JSON.stringify({ valeur: token, expiration: dateExpiration }));
        sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
      };

      saveUserDataToSessionStorage(userData?.token, userData?.user || 'any', 15);
    
    return { userData }
}

export default useAuthentication;