import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const usePreparedOrder = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handlePreparedOrder = async (orderId) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.put("order/prepared/",{
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

    return { handlePreparedOrder, isLoadingPreparedOrder : isLoading, alertBannerPreparedOrder : alertBanner };
};

export default usePreparedOrder;