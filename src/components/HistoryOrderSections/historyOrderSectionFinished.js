import React,{Fragment, useState} from "react";
import useGetFinishedOrders from "../../hooks/data/get/useGetFinishedOrders";
import HorizontalCard from "../HorizontalCard/horizontalCard";
import Modal from "../Modal/modal";
import NoContentTitle from "../NoContentTitle/noContentTitle";
import Loader from "../Loader/loader";

const HistoryOrderSectionFinished = () => {
    const {finishedOrders, isLoadingFinishedOrders, refetchFinishedOrders} = useGetFinishedOrders();
    
    const [isModalOpen, setIsModalOpen]=useState(null)

    const handleOpenModal = (value) => {
        setIsModalOpen(value);
    }
    const handleCloseModal = () => {
        setIsModalOpen(null);
    }
    
    let content = null;
    
    if (isLoadingFinishedOrders) {
        content = <Loader/>
    }
    if (finishedOrders && finishedOrders.length===0 && !isLoadingFinishedOrders) {
        content = <NoContentTitle title="Aucune commande"/>
    }
    if (finishedOrders && finishedOrders.length>0 && !isLoadingFinishedOrders) {
        content =finishedOrders.map((order,index)=>{
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
                        {order.status}
                </HorizontalCard>
            </Fragment>
            );
        }) }

    return content;
}

export default HistoryOrderSectionFinished;