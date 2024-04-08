import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetWaitingOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getWaitingOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/api/order/waiting/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getWaitingOrders();
    },[])
    

    return {waitingOrders : ordersData, isLoadingWaitingOrders : isLoading};
}

export default useGetWaitingOrders;