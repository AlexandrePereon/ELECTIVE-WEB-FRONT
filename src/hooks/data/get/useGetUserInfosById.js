import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetUserInfosById = (userId) => {

    const [userInfosByIdData, setUserInfosByIdData] = useState(null);
    const [isLoadingUserInfosById, setIsLoadingUserInfosById] = useState(true);   
    
    useEffect(()=>{
        const getUserInfosById = async (userId) => {
            setIsLoadingUserInfosById(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_AUTH}user/${userId}`);
                if (response) {
                    setUserInfosByIdData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingUserInfosById(false);
            }
        };

        getUserInfosById(userId);
    },[])
    

    return {userInfosByIdData, isLoadingUserInfosById};
}

export default useGetUserInfosById;