import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useSuspendAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSuspendAccount = async (userId) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.put("/api-auth/suspend/",{
                userId : userId
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

    return { handleSuspendAccount, isLoadingSuspendAccount : isLoading, alertBannerSuspendAccount : alertBanner };
};

export default useSuspendAccount;