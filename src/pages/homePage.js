import React,{ Fragment, useState }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import DiffText from "../components/DiffText/diffText";
import Graph from "../components/Graph/graph";
import Modal from "../components/Modal/modal";
import useAuthentication from "../hooks/useAuthentication";



const HomePage = () => {
    const [isOpen, setIsOpen]= useState(false)
    const handleOnCloseModal = () => {
        setIsOpen(false)
    }

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
            {/* <AlertBannerCookies/> */}
            <Header role={userInfos?.role}/>
            <Hero/>
            {/* <Tab/> */}
            <button onClick={()=>{setIsOpen(!isOpen)}}>Open modal</button>
            {isOpen && <Modal handleOnCloseModal={handleOnCloseModal}/>}
            <DiffText/>
            <Graph/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage;