import { useEffect, useState } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetInDeliveryOrders = () => {

    const [ordersData, setOrdersData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);   
    
    useEffect(()=>{
        const getInDeliveryOrders = async () => {
            setIsLoading(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_ORDER}in-delivery/`);
                if (response) {
                    setOrdersData(response.data.orders);
                }
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        };

        getInDeliveryOrders();
    },[])
    

    return {inDeliveryOrders : ordersData, isLoadingInDeliveryOrders : isLoading};
}

export default useGetInDeliveryOrders;