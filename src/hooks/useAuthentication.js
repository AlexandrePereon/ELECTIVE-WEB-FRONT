/**
 * Hook authentication data.
 * 
 * @typedef useAuthentication
 * @kind hook
 * 
 * @returns {object} - Les informations de l'utilisateur connecté.
 */
const useAuthentication = (userData) => {

    const saveUserDataToSessionStorage = (token, refreshToken, userInfos, expirationTimeAsMinutes) => {
        let dateExpiration = new Date().getTime() + (expirationTimeAsMinutes * 60 * 1000);
        sessionStorage.setItem('token', JSON.stringify({ valeur: token, expiration: dateExpiration }));
        sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
        sessionStorage.setItem('refreshToken', refreshToken);
        console.log(`token : ${token}`)
        console.log(`refreshToken : ${refreshToken}`)
        console.log(`Infos user : ${userInfos}`)
      };

      saveUserDataToSessionStorage(userData?.token, userData?.refreshToken, userData?.user || 'any', 15);
    
    return { userData }
}

export default useAuthentication;