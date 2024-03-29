import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";

const MarketingHomePage = () => {
    const getUserInfosFromSessionStorage = () => {
        return JSON.parse(sessionStorage.getItem('userInfos'));
      };

    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>Accueil Marketing</h1>
            <Graph/>
            <Statistic/>

            <Footer/>
        </Fragment>
    )
}

export default MarketingHomePage;