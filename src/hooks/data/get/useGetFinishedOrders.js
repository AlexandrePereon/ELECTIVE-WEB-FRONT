import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetFinishedOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getInProgressOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/api/order/inactive/`);
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
    

    return {finishedOrders : ordersData, isLoadingFinishedOrders : isLoading};
}

export default useGetFinishedOrders;