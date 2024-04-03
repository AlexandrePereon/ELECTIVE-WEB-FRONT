import { useEffect, useState } from "react";
import axiosReq from "../../../utils/axios";

const useGetAllRestaurants = () => {

    const [restaurantsData, setRestaurantsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getAllRestaurants = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/auth/user`);
                if (response) {
                    setRestaurantsData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getAllRestaurants();
    },[])
    

    return {restaurantsData, isLoading};
}

export default useGetAllRestaurants;