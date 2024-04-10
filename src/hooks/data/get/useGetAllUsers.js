import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetAllUsers = () => {

    const [usersData, setUsersData] = useState(null);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);   
    const [isReload, setIsReload] = useState(false);   
    
    useEffect(()=>{
        const getAllUsers = async () => {
            setIsLoadingUsers(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_AUTH}users`);
                if (response) {
                    setUsersData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingUsers(false);
            }
        };

        getAllUsers();
    },[isReload])
    
    const refetch = () => {
        setIsReload(!isReload);
    };

    return {refetchUsersData : refetch, usersData, isLoadingUsers};
}

export default useGetAllUsers;