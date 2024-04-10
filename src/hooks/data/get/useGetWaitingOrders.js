import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetWaitingOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReload, setIsReload] = useState(false);   
    
    useEffect(()=>{
        const getWaitingOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_ORDER}waiting/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getWaitingOrders();
    },[isReload])
    
    const refetch = () => {
        setIsReload(!isReload)
    }

    return {waitingOrders : ordersData, isLoadingWaitingOrders : isLoading, refetchWaitingOrders : refetch};
}

export default useGetWaitingOrders;