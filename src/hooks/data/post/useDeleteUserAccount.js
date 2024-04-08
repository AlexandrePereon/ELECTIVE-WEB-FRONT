import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useDeleteUserAccount = () => {
    const [isLoadingDeleteAccount, setIsLoadingDeleteAccount] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleDeleteAccount = async () => {
        setIsLoadingDeleteAccount(true);
        try {
            const response = await axiosReq.delete("/api-auth/delete");
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoadingDeleteAccount(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoadingDeleteAccount(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount : alertBanner };
};

export default useDeleteUserAccount;