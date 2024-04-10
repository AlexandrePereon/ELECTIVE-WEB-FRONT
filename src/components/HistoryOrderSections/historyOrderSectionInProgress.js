import React, { Fragment, useState } from "react";
import HorizontalCard from "../HorizontalCard/horizontalCard";
import useGetInProgressOrders from "../../hooks/data/get/useGetInProgressOrders";
import usePreparedOrder from "../../hooks/data/post/usePreparedOrder";
import Modal from "../Modal/modal"
import NoContentTitle from "../NoContentTitle/noContentTitle";
import Loader from "../Loader/loader";

const HistoryOrderSectionInProgress = ({role}) => {
   
    const {inProgressOrders, isLoadingInProgressOrders, refetchInProgressOrders} = useGetInProgressOrders();
    const {handlePreparedOrder} = usePreparedOrder();

    const [isModalOpen, setIsModalOpen]=useState(null)

    const handleOpenModal = (value) => {
        setIsModalOpen(value);
    }
    const handleCloseModal = () => {
        setIsModalOpen(null);
    }
    
    let content = null;

    if (isLoadingInProgressOrders) {
        content = <Loader/>
    }
    if (inProgressOrders && inProgressOrders.length===0 && !isLoadingInProgressOrders) {
        content = <NoContentTitle title="Aucune commande"/>
    }
    if (inProgressOrders && inProgressOrders.length>0 && !isLoadingInProgressOrders) {
        content = inProgressOrders.map((order,index)=>{
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
                             <div className="text-medium-green">{order.status}</div>
                             {role === "restaurant" &&  order.status === "En préparation" &&
                                 <button
                                 type="button"
                                 className={`rounded-md w-fit mr-2 p-2 bg-light-green font-semibold text-white shadow-sm hover:bg-medium-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                 onClick={()=>{handlePreparedOrder(order._id, refetchInProgressOrders)}}
                                 >
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                     </svg>
                             </button>
                             }
                         </div>
                 </HorizontalCard>
             </Fragment>
             );
         })
    }

    return content;
}

export default HistoryOrderSectionInProgress;