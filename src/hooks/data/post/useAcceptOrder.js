import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useAcceptOrder = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleAcceptOrder = async (orderId) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.put(`${process.env.REACT_APP_API_PREFIX_ORDER}accept/`,{
                orderId : orderId
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

    return { handleAcceptOrder, isLoadingAcceptOrder : isLoading, alertBannerAcceptOrder : alertBanner };
};

export default useAcceptOrder;