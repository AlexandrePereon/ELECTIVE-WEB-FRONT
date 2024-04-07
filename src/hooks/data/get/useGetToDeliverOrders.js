import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetToDeliverOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getToDeliverOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`/order/to-deliver/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getToDeliverOrders();
    },[])
    

    return {toDeliverOrders : ordersData, isLoadingToDeliverOrders : isLoading};
}

export default useGetToDeliverOrders;