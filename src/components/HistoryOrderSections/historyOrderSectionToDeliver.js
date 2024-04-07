import React from "react";
import HorizontalCard from "../HorizontalCard/horizontalCard";
import useGetToDeliverOrders from "../../hooks/data/get/useGetToDeliverOrders";
import useAcceptOrderToDelivery from "../../hooks/data/post/useAcceptOrderToDelivery";

const HistoryOrderSectionToDeliver = () => {
    const {toDeliverOrders} = useGetToDeliverOrders();
    const {handleAcceptOrderToDelivery} = useAcceptOrderToDelivery();
    
    return(
        toDeliverOrders ? toDeliverOrders.map((order,index)=>{
           return(
           <HorizontalCard 
               title={`Commande n°${order._id}`}
               description={`${order.total_price}€`}
               key={index}
            >
               <div className="flex">
                    <button
                        type="button"
                        className={`rounded-md w-fit mr-2 p-2 bg-light-green font-semibold text-white shadow-sm hover:bg-medium-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        onClick={()=>handleAcceptOrderToDelivery(order._id)}
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                    </button>
                </div>
            </HorizontalCard>
            );
        }) :
        <h1>Aucune commande</h1>
    
        )
}

export default HistoryOrderSectionToDeliver;