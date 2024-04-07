import React from "react";
import useGetFinishedOrders from "../../hooks/data/get/useGetFinishedOrders";
import HorizontalCard from "../HorizontalCard/horizontalCard";

const HistoryOrderSectionFinished = () => {
    const {finishedOrders , isLoadingFinishedOrders} = useGetFinishedOrders();
    
    return(
        finishedOrders ? finishedOrders.map((order,index)=>{
           return(
           <HorizontalCard 
               title={`Commande n°${order._id}`}
               description={`${order.total_price}€`}
               key={index}
            >
                {order.status}
            </HorizontalCard>
            );
        }) :
        <h1>Aucune commande</h1>
    
        )
}

export default HistoryOrderSectionFinished;