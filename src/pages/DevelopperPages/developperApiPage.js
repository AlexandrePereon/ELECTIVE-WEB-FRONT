import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import { Link } from 'react-router-dom';
import TitleFade from "../../components/TitleFade/titleFade";
import ButtonRedirect from "../../components/buttonRedirect/buttonRedirect";

const DevelopperApiPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const tabBtn = [
        {
            title: "API authentification",
            link: "http://app.localhost/auth/api-docs/#/"
        },
        {
            title: "API commandes",
            link: "http://app.localhost/order/api-docs/#/"
        },
        {
            title: "API restaurant",
            link: "http://app.localhost/restaurant/api-docs/#/"
        },
    ]

    const btnList = tabBtn.map((btn, index) => {
        return(
            <ButtonRedirect key={index} title={btn.title} url={btn.link}/>
        );
    })

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <TitleFade title="Liens API :"/>
            {btnList}
            <Footer/>
        </Fragment>
    )
}

export default DevelopperApiPage;