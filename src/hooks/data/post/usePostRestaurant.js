import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
import useAuthentication from "../../useAuthentication";
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

    const {updateRestaurantIdInSessionStorage} = useAuthentication();

    const handleSubmit = async (e, imageValue) => {
        e.preventDefault();
        setIsLoading(false);
        try {
            const response = await axiosReq.post(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}create`, {
                name: e.target.elements.name.value,
                image: imageValue,
                description: e.target.elements.description.value})
            if (response) {
                setMessage({ code: response.status, description: response.data.message });
                setIsLoading(false);
                console.log(response.data.id)
                updateRestaurantIdInSessionStorage(response.data.id)
                window.location.href = '/restaurant-accueil';
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