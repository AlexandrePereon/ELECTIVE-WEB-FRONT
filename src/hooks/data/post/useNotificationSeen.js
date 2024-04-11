import {axiosReq} from "../../../utils/axios";


/**
 * Hook useNotificationSeen post data.
 * 
 * @typedef useNotificationSeen
 * @kind hook
 * 
 * @returns {object} - 
 */
const useNotificationSeen = () => {
    const handleSubmit = async () => {
        try {
            const response = await axiosReq.put(`${process.env.REACT_APP_API_PREFIX_ORDER}notified`)
          } catch (error) {}
        };
    return {handleSubmit};
};

export default useNotificationSeen;