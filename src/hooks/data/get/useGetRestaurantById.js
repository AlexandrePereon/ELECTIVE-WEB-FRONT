import { useState, useEffect } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetRestaurantById = (restaurantID) => {

    const [restaurantData, setRestaurantData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getRestaurantById = async (restaurantID) => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}${restaurantID}`);
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