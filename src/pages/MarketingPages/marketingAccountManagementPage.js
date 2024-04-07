import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import useGetAllUsers from "../../hooks/data/get/useGetAllUsers";

const MarketingAccountManagementPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const {usersData, isLoadingUsers}=useGetAllUsers();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>MarketingAccountManagementPage</h1>
            {!isLoadingUsers && usersData.map((user)=><h1>{user.firstName}</h1>)}
            <Footer/>
        </Fragment>
    )
}

export default MarketingAccountManagementPage;