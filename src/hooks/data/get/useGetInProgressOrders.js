import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetInProgressOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getInProgressOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/api/order/active/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getInProgressOrders();
    },[])
    

    return {inProgressOrders : ordersData, isLoadingInProgressOrders : isLoading};
}

export default useGetInProgressOrders;