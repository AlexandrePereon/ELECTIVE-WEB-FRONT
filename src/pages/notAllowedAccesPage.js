import React,{ Fragment }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import useAuthentication from "../hooks/useAuthentication";
import TitleFade from "../components/TitleFade/titleFade";


const NotAllowedAccessPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <TitleFade title={"Vous n'avez pas accès à cette page avec ce rôle"}/>
            <Footer/>
        </Fragment>
    )
}

export default NotAllowedAccessPage;