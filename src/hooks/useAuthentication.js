/**
 * Hook authentication data.
 * 
 * @typedef useAuthentication
 * @kind hook
 * 
 * @returns {object} - Les informations de l'utilisateur connecté.
 */
const useAuthentication = (userData) => {

    const saveUserDataToLocalStorage = (token, userInfos) => {
      console.log(userInfos)
        localStorage.setItem('token', token);
        localStorage.setItem('userInfos', JSON.stringify(userInfos));
      };

      saveUserDataToLocalStorage(userData?.token, userData?.user || 'any');
    
    return { userData }
}

export default useAuthentication;