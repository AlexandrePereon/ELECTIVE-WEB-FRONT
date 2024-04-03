import {useState} from "react";
import {axiosReq} from "../../../utils/axios";
import useDisplayAlert from "../../useDisplayAlert";
import { useNavigate } from "react-router-dom";

/**
 * Hook sign up post data.
 * 
 * @typedef useSignUp
 * @kind hook
 * 
 * @returns {object} - 
 */
const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ code: null, description: null });
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosReq.post("/auth/register", {
                firstName: e.target.elements.firstName.value,
                lastName:  e.target.elements.lastName.value,
                email: e.target.elements.email.value,
                password: e.target.elements.password.value,
                role: e.target.elements.role.value,
                partnerCode : "",
            });
            if (response) {
                setMessage({code : response.status, description : response.data.message});
                setIsLoading(false);
                navigate('/login');
              }
          } catch (error) {
            setMessage({code : error.response.status, description : error.response.data.message});
            setIsLoading(false);
          }
    };

    const {alertBanner}= useDisplayAlert(message);

    return { handleSubmit, isLoading, alertBanner };
};

export default useSignUp;