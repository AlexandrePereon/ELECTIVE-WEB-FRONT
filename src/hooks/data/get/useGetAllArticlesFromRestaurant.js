import { useState, useEffect } from "react";
import axiosReq from "../../../utils/axios";

const useGetAllArticlesFromRestaurant = (restaurantID) => {

    const [articlesData, setArticlesData] = useState(null);
    const [isLoadingArticles, setIsLoadingArticles] = useState(false);

    useEffect(() => {
        const getAllArticlesFromRestaurant = async (restaurantID) => {
            setIsLoadingArticles(true);
            try {
                const response = await axiosReq.get(`/restaurant/${restaurantID}/articles`);
                if (response) {
                    setArticlesData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingArticles(false);
            }
        };

        getAllArticlesFromRestaurant(restaurantID);
    }, [restaurantID]); // Déclenche l'effet lorsque restaurantID change

    return {articlesData, isLoadingArticles};
}

export default useGetAllArticlesFromRestaurant;