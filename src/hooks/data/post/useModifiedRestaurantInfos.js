import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useModifiedRestaurantInfos = () => {
    const [isLoadingModificationRestaurantInfos, setisLoadingModificationRestaurantInfos] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e, imageValue) => {
        e.preventDefault();
        setisLoadingModificationRestaurantInfos(true);
        try {
            const response = await axiosReq.put(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}`, {
                name : e.target.elements.name.value ,
                image : imageValue,
                description : e.target.elements.description.value,
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setisLoadingModificationRestaurantInfos(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setisLoadingModificationRestaurantInfos(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmit, isLoadingModificationRestaurantInfos, alertBanner };
};

export default useModifiedRestaurantInfos;