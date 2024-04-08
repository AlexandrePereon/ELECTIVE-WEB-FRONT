import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetAllRestaurants = (pagination) => {

    const [restaurantsData, setRestaurantsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    const [maxPageRestaurants, setMaxPageRestaurants] = useState(null);
    
    useEffect(()=>{
        const getAllRestaurants = async (pagination) => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}all/${pagination}`);
                if (response) {
                    setMaxPageRestaurants(response.data.maxPage);
                    setRestaurantsData(response.data.restaurants);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getAllRestaurants(pagination);
    },[])
    

    return {restaurantsData, isLoadingRestaurants : isLoading, maxPageRestaurants};
}

export default useGetAllRestaurants;