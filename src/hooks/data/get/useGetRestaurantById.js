import { useState, useEffect } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetRestaurantById = (restaurantID) => {

    const [restaurantData, setRestaurantData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getRestaurantById = async (restaurantID) => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/api-restaurant/${restaurantID}`);
                if (response) {
                    setRestaurantData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getRestaurantById(restaurantID);
    }, [restaurantID]);

    return {restaurantData, isLoading};
}

export default useGetRestaurantById;