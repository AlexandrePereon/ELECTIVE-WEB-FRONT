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
        <div className="min-h-screen sm:w-page m-auto pt-10">
        <TitleFade title="Lien des composants :"/>
        <ButtonRedirect title="Liste des composants" url={`/gitlab/`} />
        </div>
        <Footer/>
    </Fragment>
    )
}
export default ComposantsPage;