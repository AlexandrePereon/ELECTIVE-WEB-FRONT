import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useDeleteMenu = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleDeleteMenu = async (menuId) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.delete(`/api/restaurant/menu/${menuId}`);
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

    return { handleDeleteMenu, isLoadingDeleteMenu : isLoading, alertBannerDeleteMenu : alertBanner };
};

export default useDeleteMenu;