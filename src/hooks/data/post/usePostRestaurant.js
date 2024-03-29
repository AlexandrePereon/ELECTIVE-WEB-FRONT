import {useState} from "react";
import axiosReq from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
/**
 * Hook create restaurant.
 * 
 * @typedef usePostRestaurant
 * @kind hook
 * 
 * @returns {object} - 
 */
const usePostRestaurant = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e, imageValue) => {
        e.preventDefault();
        setIsLoading(false);
        try {
            const response = await axiosReq.post("/restaurant/create", {
                name: e.target.elements.name.value,
                image: imageValue,
                description: e.target.elements.description.value})
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

    return { handleSubmit, isLoading, alertBanner };
};

export default usePostRestaurant;