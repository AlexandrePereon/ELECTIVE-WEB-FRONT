import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useModifiedArticle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e, articleId, imageValue) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosReq.put(`/api-restaurant/article/${articleId}`, {
                name : e.target.elements.name.value ,
                image : imageValue,
                description : e.target.elements.description.value,
                price : e.target.elements.price.value
            });
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

    return { handleSubmitArticleModification : handleSubmit, isLoading, alertBanner };
};

export default useModifiedArticle;