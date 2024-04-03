import React,{ Fragment, useState }  from "react";
import Header from "../components/Header/header";
import useAuthentication from "../hooks/useAuthentication";
import userInfosFormData from "../formData/userInfosFormData";
import Input from "../components/Input/input";
import useGetUserInfos from "../hooks/data/get/useGetUserInfos";
import Loader from "../components/Loader/loader";
import useModifiedUserInfos from "../hooks/data/post/useModifiedUserInfos";
import ButtonValidationForm from "../components/ButtonValidationForm/buttonValidationForm";
import useDeleteUserAccount from "../hooks/data/post/useDeleteUserAccount";

const MyAccountPage = () => {

    const {userInfosData, isLoadingUserInfos}= useGetUserInfos();

    const {handleSubmit, isLoadingModificationUserInfos, alertBanner} = useModifiedUserInfos();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount } = useDeleteUserAccount();

    
    const [isEditable, setIsEditable] = useState(true)

    const inputs = userInfosFormData.map((input, index)=>{
            if (input.type ==="picture") {
                return(<img src='' key={index}/>)
            } else {
                return (<Input
                defaultValue={userInfosData && userInfosData[input.id]}
                title={input.title}
                id={input.id}
                type={input.type}
                size={input.size}
                isDisable={!isEditable}
                options={input.type === "select" && input.options}
                key={index}/>)    
                
            }})

    return (
        <Fragment>
            <Header role={userInfosData?.role}/>
            {alertBanner && alertBanner}
            {alertBannerDeleteAccount && alertBannerDeleteAccount}
            <h1>myAccount</h1>
            {isLoadingUserInfos ?
            <Loader/> :
            <Fragment>
                <form action="#" method="PUT" onSubmit={(e) => handleSubmit(e)}>
                    {inputs}
                    <ButtonValidationForm isLoading={isLoadingModificationUserInfos} size={"w-small"}/>
                </form>
                {userInfosData && 
                    <form action="#" method="DELETE" onSubmit={() => handleDeleteAccount()}>
                    <button
                    type="submit"
                    className={`rounded-md w-small bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    >Supprimer</button>
                    </form>}
            </Fragment>
            }
        
        </Fragment>
    )
}

export default MyAccountPage;