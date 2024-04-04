import { useState, useEffect } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetAllArticlesFromRestaurant = (restaurantID,pagination) => {

    const [articlesData, setArticlesData] = useState(null);
    const [isLoadingArticles, setIsLoadingArticles] = useState(false);   
    const [maxPageArticles, setMaxPageArticles] = useState(null);

    useEffect(() => {
        const getAllArticlesFromRestaurant = async (restaurantID,pagination) => {
            setIsLoadingArticles(true);
            try {
                const response = await axiosReq.get(`/restaurant/${restaurantID}/articles/${pagination}`);
                if (response) {
                    setMaxPageArticles(response.data.maxPage);
                    setArticlesData(response.data.articles);
                }
            } catch (error) {
            } finally {
                setIsLoadingArticles(false);
            }
        };

        getAllArticlesFromRestaurant(restaurantID,pagination);
    }, [restaurantID,pagination]);

    return {articlesData, isLoadingArticles, maxPageArticles};
}

export default useGetAllArticlesFromRestaurant;