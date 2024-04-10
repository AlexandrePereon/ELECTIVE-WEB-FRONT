import React, { Fragment, useState } from "react";
import useGetWaitingOrders from "../../hooks/data/get/useGetWaitingOrders";
import HorizontalCard from "../HorizontalCard/horizontalCard";
import useAcceptOrder from "../../hooks/data/post/useAcceptOrder";
import Loader from "../Loader/loader";
import NoContentTitle from "../NoContentTitle/noContentTitle";
import Modal from "../Modal/modal";

const HistoryOrderSectionRequest = ({role}) => {
   
    const {waitingOrders , isLoadingWaitingOrders} = useGetWaitingOrders();
    const { handleAcceptOrder, isLoadingAcceptOrder, alertBannerAcceptOrder } = useAcceptOrder();
    
    const [isModalOpen, setIsModalOpen]=useState(null)

    const handleOpenModal = (value) => {
        setIsModalOpen(value);
    }
    const handleCloseModal = () => {
        setIsModalOpen(null);
    }

    let content = null;
    
    if (isLoadingWaitingOrders) {
        content = <Loader/>
    }
    if (waitingOrders && waitingOrders.length===0 && !isLoadingWaitingOrders) {
        content = <NoContentTitle title="Aucune commande"/>
    }
    if (waitingOrders && waitingOrders.length>0 && !isLoadingWaitingOrders) {
        content = waitingOrders.map((order,index)=>{
            return(
                <Fragment>
                {isModalOpen && isModalOpen === order._id && 
                    <Modal
                        handleOnCloseModal={handleCloseModal}
                        title={`Récapitulatif de la commande ${order._id} :`}
                    >   
                        <h1>Liste des articles :</h1>
                        <ul>
                            {order.articles.map((article)=><li className="text-black my-1">{article.article_name} : {article.article_price}€</li>)}
                        </ul>
                        <h1>Liste des menus :</h1>
                        <ul>
                            {order.menus.map((menu)=><li className="text-black  my-1">{menu.menu_name} : {menu.menu_price}€</li>)}
                        </ul>
                        <h1>Total de la commande</h1>
                        <p className="text-black  my-1">{order.total_price} €</p>
                    </Modal>}
                    <HorizontalCard 
                        title={`Commande n°${order._id}`}
                        description={`${order.total_price}€`}
                        handleOnOpenModal={handleOpenModal}
                        id={order._id}
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
                </Fragment>
             );
         })
    }  

    return content;
}

export default HistoryOrderSectionRequest;