import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import Hero from "../../components/Hero/hero";

const RestaurantHomePage = () => {

    const {getUserInfosFromSessionStorage}= useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)
    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <Hero/>
            <Footer/>
        </Fragment>
    )
}

export default RestaurantHomePage;