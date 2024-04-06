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
            const response = await axiosReq.put("/order/notified")
            if (response) {
              console.log("Notification mis à jour")
            }
          } catch (error) {
            console.log(error)
          }
        };
    return {handleSubmit};
};

export default useNotificationSeen;