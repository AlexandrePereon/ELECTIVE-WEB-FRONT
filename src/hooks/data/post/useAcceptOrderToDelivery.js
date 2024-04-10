import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useAcceptOrderToDelivery = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleAcceptOrderToDelivery = async (orderId, refetch) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.put(`${process.env.REACT_APP_API_PREFIX_ORDER}deliver/`,{
                orderId : orderId
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoading(false);
                refetch();
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoading(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleAcceptOrderToDelivery, isLoadingAcceptOrderToDelivery : isLoading, alertBannerAcceptOrderToDelivery : alertBanner };
};

export default useAcceptOrderToDelivery;