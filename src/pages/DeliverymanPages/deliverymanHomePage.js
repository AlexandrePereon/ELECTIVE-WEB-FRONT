import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const DeliverymanHomePage = () => {
    const getUserInfosFromSessionStorage = () => {
        return JSON.parse(sessionStorage.getItem('userInfos'));
      };

    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>Accueil Livreur</h1>
            <Footer/>
        </Fragment>
    )
}

export default DeliverymanHomePage;