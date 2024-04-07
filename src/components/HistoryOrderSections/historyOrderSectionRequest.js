import React, { Fragment } from "react";
import useGetWaitingOrders from "../../hooks/data/get/useGetWaitingOrders";
import BrandCard from "../BrandCard/brandCard";
import HorizontalCard from "../HorizontalCard/horizontalCard";
import useAcceptOrder from "../../hooks/data/post/useAcceptOrder";

const HistoryOrderSectionRequest = ({role}) => {
   
    const {waitingOrders , isLoadingWaitingOrders} = useGetWaitingOrders();
    const { handleAcceptOrder, isLoadingAcceptOrder, alertBannerAcceptOrder } = useAcceptOrder();
    
    return(
        waitingOrders && waitingOrders.map((order,index)=>{
           return(
           <HorizontalCard 
               title={`Commande n°${order._id}`}
               description={`${order.total_price}€`}
               key={index}
            >
                <div className="flex">
                {role === "restaurant" &&
                    <button
                        type="button"
                        className={`rounded-md w-fit mr-2 p-2 bg-light-green font-semibold text-white shadow-sm hover:bg-medium-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        onClick={()=>handleAcceptOrder(order._id)}
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                    </button>}
                    <button
                        type="button"
                        className={`rounded-md w-fit p-2 bg-red-500 font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                    </button>
                </div>
            </HorizontalCard>
            );
        })
    
        )
}

export default HistoryOrderSectionRequest;