import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useModifiedMenu = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e, menuId, imageValue, articlesList) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosReq.put(`/api/restaurant/menu/${menuId}`, {
                name : e.target.elements.name.value ,
                image : imageValue,
                description : e.target.elements.description.value,
                articles : articlesList,
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

    return { handleSubmitMenuModification : handleSubmit, isLoading, alertBanner };
};

export default useModifiedMenu;