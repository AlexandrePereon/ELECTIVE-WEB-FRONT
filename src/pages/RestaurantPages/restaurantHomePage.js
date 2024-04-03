import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";

const RestaurantHomePage = () => {
    // const getUserInfosFromSessionStorage = () => {
    //     return JSON.parse(sessionStorage.getItem('userInfos'));
    //   };
const {getUserInfosFromSessionStorage}= useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>Accueil Restaurant</h1>
            <Footer/>
        </Fragment>
    )
}

export default RestaurantHomePage;