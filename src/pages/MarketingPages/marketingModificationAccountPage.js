import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Loader from "../../components/Loader/loader";
import Footer from "../../components/Footer/footer";
import userInfosFormData from "../../formData/userInfosFormData";
import { useParams } from "react-router";
import TitleFade from "../../components/TitleFade/titleFade";
import useGetUserInfosById from "../../hooks/data/get/useGetUserInfosById";
import useAuthentication from "../../hooks/useAuthentication";
import Input from "../../components/Input/input";
import ButtonValidationForm from "../../components/ButtonValidationForm/buttonValidationForm";
import useDeleteAccount from "../../hooks/data/post/useDeleteAccount";
import useUpdateUserInfos from "../../hooks/data/post/useUpdateUserInfos";
import ButtonWithVerification from "../../components/ButtonWithVerification/buttonWithVerification";

const MarketingModificationAccountPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const marketinUserInfos = getUserInfosFromSessionStorage();

    const {id}=useParams();
    const {userInfosByIdData, isLoadingUserInfosbyId}= useGetUserInfosById(id);
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount }= useDeleteAccount();
    const { handleSubmit, isLoadingUpdateUserInfos, alertBanner } = useUpdateUserInfos();


    const inputs = userInfosFormData.map((input, index)=>{
        if (input.id ==="currentPassword" || input.id ==="newPassword") {
            return(<></>)
        } else{
            return (<Input
                defaultValue={userInfosByIdData && userInfosByIdData[input.id]}
                title={input.title}
                id={input.id}
                type={input.type}
                size={input.size}
                options={input.type === "select" && input.options}
                key={index}/>)   
        }})

return(
    <Fragment>
    <Header role={marketinUserInfos?.role}/>
    <div className="sm:w-page m-auto pb-10">
    {alertBanner && alertBanner}
    {alertBannerDeleteAccount && alertBannerDeleteAccount}
    <TitleFade title="Modification de compte"/>
    <Fragment>
        <ButtonWithVerification query={handleDeleteAccount} isLoading={isLoadingDeleteAccount} id={id}/> 
        <form action="#" method="PUT" onSubmit={(e) => handleSubmit(e,id)}>
            <div className="border-b border-gray-900/10 pb-2">
                {inputs}
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonValidationForm title={"Sauvegarder"}/>
            </div>
        </form>
    </Fragment>
</div>
<Footer/>
</Fragment>
);
}

export default MarketingModificationAccountPage;