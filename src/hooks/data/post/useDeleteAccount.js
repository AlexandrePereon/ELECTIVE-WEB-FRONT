import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useDeleteAccount = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleDeleteAccount = async (userId, refetch) => {
        setIsLoading(true);
        try {
            const response = await axiosReq.delete(`${process.env.REACT_APP_API_PREFIX_AUTH}delete/${userId}`);
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

    return { handleDeleteAccount, isLoadingDeleteAccount : isLoading, alertBannerDeleteAccount : alertBanner };
};

export default useDeleteAccount;