/**
 * Hook logout data.
 * 
 * @typedef useLogOut
 * @kind hook
 * 
 * @returns {object} - Les informations de l'utilisateur connecté.
 */

const useLogOut = () => {
    const logout = () =>{
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userInfos');
      sessionStorage.removeItem('refreshToken');
      window.location.href = "/login";
    }

    return { logout }
}

export default useLogOut;