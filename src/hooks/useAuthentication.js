import React, {useEffect, useState} from "react";

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
        let dateExpiration = new Date().getTime() + (15 * 60 * 1000);
        sessionStorage.setItem('token', JSON.stringify({ valeur: token, expiration: dateExpiration }));
        sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
        sessionStorage.setItem('refreshToken', refreshToken);
      };

    
    const [userInfos, setUserInfos] = useState(getUserInfosFromSessionStorage());
    const updateRestaurantIdInSessionStorage = (restaurantId) => {
      setUserInfos(prevState => ({...prevState, restaurantId : restaurantId}));
    }

    useEffect(()=>{
      sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
    },[userInfos])

     return { saveUserDataToSessionStorage, getUserInfosFromSessionStorage, updateRestaurantIdInSessionStorage }
}

export default useAuthentication;