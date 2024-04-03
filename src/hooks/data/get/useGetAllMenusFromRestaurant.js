import { useState, useEffect } from "react";
import axiosReq from "../../../utils/axios";

const useGetAllMenusFromRestaurant = (restaurantID, pagination) => {

    const [menusData, setMenusData] = useState(null);
    const [isLoadingMenus, setIsLoadingMenus] = useState(false);
    const [maxPageMenus, setMaxPageMenus] = useState(null);

    useEffect(() => {
        const getAllMenusFromRestaurant = async (restaurantID, pagination) => {
            setIsLoadingMenus(true);
            try {
                const response = await axiosReq.get(`/restaurant/${restaurantID}/menus/${pagination}`);
                if (response) {
                    setMaxPageMenus(response.data.maxPage)
                    setMenusData(response.data.menus);
                }
            } catch (error) {
            } finally {
                setIsLoadingMenus(false);
            }
        };

        getAllMenusFromRestaurant(restaurantID, pagination);
    }, [restaurantID, pagination]);

    return {menusData, isLoadingMenus, maxPageMenus};
}

export default useGetAllMenusFromRestaurant;