import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";

const UserHomePage = () => {
    const {getUserInfosFromSessionStorage} = useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>

            <h1>Accueil Utilisateur</h1>

            <Footer/>
        </Fragment>
    )
}

export default UserHomePage;