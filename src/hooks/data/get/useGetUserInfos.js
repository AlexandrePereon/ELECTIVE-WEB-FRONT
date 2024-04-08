import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetUserInfos = () => {

    const [userInfosData, setUserInfosData] = useState(null);
    const [isLoadingUserInfos, setIsLoadingUserInfos] = useState(true);   
    
    useEffect(()=>{
        const getUserInfos = async () => {
            setIsLoadingUserInfos(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_AUTH}user`);
                if (response) {
                    setUserInfosData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingUserInfos(false);
            }
        };

        getUserInfos();
    },[])
    

    return {userInfosData, isLoadingUserInfos};
}

export default useGetUserInfos;