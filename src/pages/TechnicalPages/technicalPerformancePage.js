import React,{ Fragment }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import TitleFade from "../../components/TitleFade/titleFade";
import ButtonRedirect from "../../components/buttonRedirect/buttonRedirect";

const TechnicalPerformancePage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
        <Header role={userInfos?.role}/>
        <TitleFade title="Performance :"/>
        <ButtonRedirect title="Accéder aux performances" url="http://app.localhost/metrics" />
        <Footer/>
    </Fragment>
    )
}
export default TechnicalPerformancePage;