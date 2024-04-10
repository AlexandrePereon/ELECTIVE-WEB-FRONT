import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
/**
 * Hook article post data.
 * 
 * @typedef usePostRestaurantArticle
 * @kind hook
 * 
 * @returns {object} - 
 */
const usePostRestaurantArticle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmitArticle = async (formData, resetFormData) => {
        setIsLoading(false);
        try {
            const response = await axiosReq.post(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}article/create`, {
                name: formData.find(item => item.id === 'name').value,
                image: formData.find(item => item.id === 'image').value,
                description: formData.find(item => item.id === 'description').value,
                price: formData.find(item => item.id === 'price').value,
            });
            if (response) {
                setMessage({ code: response.status, description: response.data.message });
                setIsLoading(false);
                window.location.reload();
            }
        } catch (error) {
            setMessage({ code: error.response.status, description: error.response.data.message });
            setIsLoading(false);
        }
    };


    const { alertBanner } = useDisplayAlert(message);

    return { handleSubmitArticle, isLoadingArticle:isLoading, alertBannerArticle:alertBanner };
};

export default usePostRestaurantArticle;