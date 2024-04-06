import { useState, useEffect } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetArticleById = (articleID) => {

    const [articleData, setArticleData] = useState(null);
    const [isLoadingArticle, setIsLoadingArticle] = useState(false);   

    useEffect(() => {
        const getArticleById = async (articleID) => {
            setIsLoadingArticle(true);
            try {
                const response = await axiosReq.get(`/restaurant/article/${articleID}`);
                if (response) {
                    setArticleData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingArticle(false);
            }
        };

        getArticleById(articleID);
    }, [articleID]);

    return {articleData, isLoadingArticle};
}

export default useGetArticleById;