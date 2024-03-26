import {useState} from "react";
import axiosReq from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
/**
 * Hook menu post data.
 * 
 * @typedef usePostRestaurantMenu
 * @kind hook
 * 
 * @returns {object} - 
 */
const usePostRestaurantMenu = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmitMenu = async (formData) => {
        setIsLoading(false);
        console.log(formData.find(item => item.id === 'price').value)
        try {
            const response = await axiosReq.post("/restaurant/article/create", {
                name: formData.find(item => item.id === 'name').value,
                image: formData.find(item => item.id === 'image').value,
                description: formData.find(item => item.id === 'description').value,
                price: formData.find(item => item.id === 'price').value,
                articles: formData.find(item => item.id === 'article').value,
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

    return { handleSubmitMenu, isLoading, alertBanner };
};

export default usePostRestaurantMenu;