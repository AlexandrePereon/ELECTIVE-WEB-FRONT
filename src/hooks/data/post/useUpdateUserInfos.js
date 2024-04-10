import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";

const useUpdateUserInfos = () => {
    const [isLoadingUpdateUserInfos, setIsLoadingUpdateUserInfos] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });

    const handleSubmit = async (e,userId) => {
        e.preventDefault();
        setIsLoadingUpdateUserInfos(true);
        try {
            const response = await axiosReq.put(`${process.env.REACT_APP_API_PREFIX_AUTH}update`, {
                userId : userId,
                firstName: e.target.elements.firstName.value,
                lastName:  e.target.elements.lastName.value,
                email: e.target.elements.email.value,
                partnerCode: e.target.elements.partnerCode.value
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoadingUpdateUserInfos(false);
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoadingUpdateUserInfos(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmit, isLoadingUpdateUserInfos, alertBanner };
};

export default useUpdateUserInfos;