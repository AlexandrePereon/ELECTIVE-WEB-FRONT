import React,{ Fragment }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import useAuthentication from "../hooks/useAuthentication";
import TitleFade from "../components/TitleFade/titleFade";
import ButtonRedirect from "../components/buttonRedirect/buttonRedirect";

const ComposantsPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
        <Header role={userInfos?.role}/>
        <TitleFade title="Lien des composants :"/>
        <ButtonRedirect title="Liste des composants" url={`${process.env.API_URL}/gitlab/root/ELECTIVE-WEB-FRONT/-/tree/develop/src/components?ref_type=heads`} />
        <Footer/>
    </Fragment>
    )
}
export default ComposantsPage;