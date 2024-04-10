import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetToDeliverOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReload, setIsReload] = useState(false);   
    
    useEffect(()=>{
        const getToDeliverOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_ORDER}to-deliver/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getToDeliverOrders();
    },[isReload])

    const refetch = () => {
        setIsReload(!isReload)
    }
    

    return {toDeliverOrders : ordersData, isLoadingToDeliverOrders : isLoading, refetchToDeliverOrders : refetch};
}

export default useGetToDeliverOrders;