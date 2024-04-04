import React from "react";
import TitleFade from "../TitleFade/titleFade";
import useSubmitOrder from "../../hooks/data/post/useSubmitOrder";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";

const OrderSummary =({order, restaurantId})=>{

    const {handleSubmitOrder, isLoadingSubmitOrder, alertBannerSubmitOrder} = useSubmitOrder()
    return(
        <form action="#" method="POST" onSubmit={(e)=>{handleSubmitOrder(e, order, restaurantId)}}>
            {alertBannerSubmitOrder && alertBannerSubmitOrder}
            <TitleFade title="Recapitulatif de votre commande :"/>
            <h1>Nombre d'articles : {order.articles.length}</h1>
            <h1>Nombre de menus: {order.menus.length}</h1>
            <ButtonValidationForm
                isLoading={isLoadingSubmitOrder}
            />
        </form>
    );
}

export default OrderSummary;