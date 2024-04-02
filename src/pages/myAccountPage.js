import React,{ Fragment }  from "react";
import Header from "../components/Header/header";
import useAuthentication from "../hooks/useAuthentication";

const MyAccountPage = () => {

    const {getUserInfosFromSessionStorage} = useAuthentication();

    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>myAccount</h1>
        </Fragment>
    )
}

export default MyAccountPage;