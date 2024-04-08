import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useDeleteArticle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleDeleteArticle = async (articleId) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.delete(`/api/restaurant/article/${articleId}`);
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoading(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoading(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleDeleteArticle, isLoadingDeleteArticle : isLoading, alertBannerDeleteArticle : alertBanner };
};

export default useDeleteArticle;