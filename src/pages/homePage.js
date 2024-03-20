import React,{ Fragment }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import DiffText from "../components/DiffText/diffText";
import Graph from "../components/Graph/graph";
import BrandList from "../components/BrandList/brandlist";
import AlertBannerCookies from "../components/AlertBanner/alertBannerCookies";
import Statistic from "../components/Statistic/statistic";
import Collapse from "../components/Collapse/collapse";
import Hero from "../components/Hero/hero";

const HomePage = () => {
    return (
        <Fragment>
            {/* <AlertBannerCookies/> */}
            <Header/>
            <Hero/>
            <DiffText/>
            <Graph/>
            <Collapse/>
            <BrandList/>
            <Statistic/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage;