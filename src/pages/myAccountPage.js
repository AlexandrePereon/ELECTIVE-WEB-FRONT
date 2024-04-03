import React,{ Fragment, useState }  from "react";
import Header from "../components/Header/header";
import userInfosFormData from "../formData/userInfosFormData";
import Input from "../components/Input/input";
import useGetUserInfos from "../hooks/data/get/useGetUserInfos";
import Loader from "../components/Loader/loader";
import useModifiedUserInfos from "../hooks/data/post/useModifiedUserInfos";
import ButtonValidationForm from "../components/ButtonValidationForm/buttonValidationForm";
import useDeleteUserAccount from "../hooks/data/post/useDeleteUserAccount";
import Password from "../components/Password/password";

const MyAccountPage = () => {

    const {userInfosData, isLoadingUserInfos}= useGetUserInfos();

    const {handleSubmit, isLoadingModificationUserInfos, alertBanner} = useModifiedUserInfos();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount } = useDeleteUserAccount();

    const [isPasswordValid,setIsPasswordValid] = useState(false);

    const handlesetIsPasswordValid = () => {
        setIsPasswordValid(!isPasswordValid)
    }

    
    const [isEditable, setIsEditable] = useState(true)

    const inputs = userInfosFormData.map((input, index)=>{
            if (input.id ==="newPassword" && isEditable) {
                return(
                <Password
                title={input.title}
                id={input.id}
                type={input.type}
                size={input.size}
                isDisable={!isEditable}
                handlesetIsPasswordValid={handlesetIsPasswordValid}
                key={index}
                />)
            } else if (input.id ==="newPassword" && !isEditable){
                return(<></>)
            }else {
                return (<Input
                defaultValue={userInfosData && userInfosData[input.id]}
                title={input.title}
                id={input.id}
                type={input.type}
                size={input.size}
                isDisable={!isEditable || input.id === "partnerCode"}
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
                {userInfosData &&      
                    <div className="">
                        <button
                        type="button"
                        onClick={()=>{setIsEditable(!isEditable)}}
                        className={`rounded-md w-small bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            modifier
                        </button>
                        <form action="#" method="DELETE" onSubmit={() => handleDeleteAccount()}>
                            <button
                            type="submit"
                            className={`rounded-md w-small bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                Supprimer
                            </button>
                        </form>
                    </div>
                }
                <form action="#" method="PUT" onSubmit={(e) => handleSubmit(e)}>
                    <div className="border-b border-gray-900/10 pb-12">
                        {inputs}
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <ButtonValidationForm isLoading={isLoadingModificationUserInfos} size={"w-small"}/>
                    </div>
                </form>
            </Fragment>
            }
        
        </Fragment>
    )
}

export default MyAccountPage;