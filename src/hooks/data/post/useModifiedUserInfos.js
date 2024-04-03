import {useState} from "react";
import axiosReq from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useModifiedUserInfos = () => {
    const [isLoadingModificationUserInfos, setIsLoadingModificationUserInfos] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoadingModificationUserInfos(true);
        try {
            
            console.log(e.target.elements.firstName.value)
            const response = await axiosReq.put("/auth/update", {
                firstName: e.target.elements.firstName.value,
                lastName:  e.target.elements.lastName.value,
                email: e.target.elements.email.value
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoadingModificationUserInfos(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoadingModificationUserInfos(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmit, isLoadingModificationUserInfos, alertBanner };
};

export default useModifiedUserInfos;