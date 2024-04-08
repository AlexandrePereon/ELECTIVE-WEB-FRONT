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

    const handleSubmitArticle = async (formData) => {
        setIsLoading(false);
        try {
            const response = await axiosReq.post("/api/restaurant/article/create", {
                name: formData.find(item => item.id === 'name').value,
                image: formData.find(item => item.id === 'image').value,
                description: formData.find(item => item.id === 'description').value,
                price: formData.find(item => item.id === 'price').value,
            });
            if (response) {
                setMessage({ code: response.status, description: response.data.message });
                setIsLoading(false);
            }
        } catch (error) {
            setMessage({ code: error.response.status, description: error.response.data.message });
            setIsLoading(false);
        }
    };


    const { alertBanner } = useDisplayAlert(message);

    return { handleSubmitArticle, isLoading, alertBanner };
};

export default usePostRestaurantArticle;