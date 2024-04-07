import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import useGetAllUsers from "../../hooks/data/get/useGetAllUsers";
import HorizontalCard from "../../components/HorizontalCard/horizontalCard"
import { Link } from "react-router-dom";
import useSuspendAccount from "../../hooks/data/post/useSuspendAccount";
import useDeleteAccount from "../../hooks/data/post/useDeleteAccount";

const MarketingAccountManagementPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const { handleSuspendAccount, isLoadingSuspendAccount, alertBannerSuspendAccount }= useSuspendAccount();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount }= useDeleteAccount();
    const {usersData, isLoadingUsers}=useGetAllUsers();

    console.log(usersData)

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            {alertBannerDeleteAccount && alertBannerDeleteAccount}
            {alertBannerSuspendAccount && alertBannerSuspendAccount}
            <h1>MarketingAccountManagementPage</h1>
            {!isLoadingUsers && usersData.map((user)=>{
            return(
                <HorizontalCard 
                    title={user.firstName + ' ' +user.lastName}
                    description={user.email}
                >
                    <Link
                        to={`modification/${user.id}`}
                    >
                        Modifier
                    </Link>
                    <button
                        onClick={()=>handleSuspendAccount(user.id)}
                    >
                        Suspendre
                    </button>
                    <button
                        onClick={()=>handleDeleteAccount(user.id)}
                    >
                        Supprimer
                    </button>
                </HorizontalCard>
            )
            })}
            <Footer/>
        </Fragment>
    )
}

export default MarketingAccountManagementPage;