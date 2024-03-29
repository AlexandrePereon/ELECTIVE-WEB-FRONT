import {useState} from "react";
import axiosReq from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
import useAuthentication from "../../useAuthentication";

/**
 * Hook useLogIn post data.
 * 
 * @typedef useLogIn
 * @kind hook
 * 
 * @returns {object} - 
 */
const useLogIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });
    const [responseUserData, setResponseUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosReq.post("/auth/login", {
                email: e.target.elements.email.value,
                password: e.target.elements.password.value
            })
            if (response) {
              setMessage({code : response.status, description : response.data.message});
              setIsLoading(false);
              setResponseUserData(response.data)
              window.location.href = `/${response.data.user.role}-accueil`;
            }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoading(false);
          }
        };

    useAuthentication(responseUserData);

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmit, isLoading, alertBanner };
};

export default useLogIn;