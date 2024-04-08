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
            const response = await axiosReq.put("/api-order/notified")
          } catch (error) {
            console.log(error)
          }
        };
    return {handleSubmit};
};

export default useNotificationSeen;