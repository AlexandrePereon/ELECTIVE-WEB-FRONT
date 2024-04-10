import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetFinishedOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    const [isReload, setIsReload] = useState(false);   
    
    useEffect(()=>{
        const getInProgressOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_ORDER}inactive/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getInProgressOrders();
    },[isReload])
    
    const refetch = () => {
        setIsReload(!isReload)
    }
    
    return {finishedOrders : ordersData, isLoadingFinishedOrders : isLoading, refetchFinishedOrders : refetch};
}

export default useGetFinishedOrders;