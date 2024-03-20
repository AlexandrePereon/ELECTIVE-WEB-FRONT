import React,{ Fragment }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import DiffText from "../components/DiffText/diffText";
import Graph from "../components/Graph/graph";
import BrandList from "../components/BrandList/brandlist";
import TitleFade from "../components/TitleFade/titleFade";

const HomePage = () => {
    return (
        <Fragment>
            <TitleFade/>
            <Header/>
            <DiffText/>
            <Graph/>
            <BrandList/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage;