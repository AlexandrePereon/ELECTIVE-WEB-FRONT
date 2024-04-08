import React,{ Fragment}  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/hero";
import useAuthentication from "../hooks/useAuthentication";


const HomePage = () => {
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <Hero name={userInfos?.firstName}/>
            <Footer/>
        </Fragment>
    )
}

export default HomePage;