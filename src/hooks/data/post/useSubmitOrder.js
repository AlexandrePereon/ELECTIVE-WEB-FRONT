import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useSubmitOrder = () => {
    const [isLoadingSubmitOrder, setIsLoadingSubmitOrder] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmitOrder = async (e, order, restaurantId) => {
        e.preventDefault();
        setIsLoadingSubmitOrder(true);
        try {
            const response = await axiosReq.post("/api-order/create",{
                menus :order.menus,
                articles :order.articles,
                restaurantId : restaurantId,
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoadingSubmitOrder(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoadingSubmitOrder(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmitOrder, isLoadingSubmitOrder, alertBannerSubmitOrder : alertBanner };
};

export default useSubmitOrder;