import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import TitleFade from "../../components/TitleFade/titleFade";
import useAuthentication from "../../hooks/useAuthentication";
import ProductRestaurantForm from "../../components/ProductRestaurantForm/productRestaurantForm";
import useGetRestaurantById from "../../hooks/data/get/useGetRestaurantById";
import Loader from "../../components/Loader/loader";

const RestaurantPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const restaurantId = window.location.href.split('restaurant-accueil/restaurant/')[1];

    const {restaurantData, isLoading} = useGetRestaurantById(restaurantId && restaurantId);

    console.log(restaurantData)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            {isLoading || ! restaurantData ? 
            <Loader/>
            :
            <Fragment>
                <div className="w-full h-64 overflow-hidden">
                    <img src={restaurantData.image} className="w-full h-full object-cover"/>
                </div>
                <div className="sm:w-page m-auto pb-10">
                    <TitleFade title={restaurantData.name}/>
                    <ProductRestaurantForm restaurantId={restaurantId}/> 
                </div>
                
            </Fragment>  
            }
          <Footer/>
        </Fragment>
    )
}

export default RestaurantPage;