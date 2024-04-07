import React,{ Fragment, useState }  from "react";
import userInfosFormData from "../../formData/userInfosFormData";
import Input from "../Input/input";
import useModifiedUserInfos from "../../hooks/data/post/useModifiedUserInfos";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";
import useDeleteUserAccount from "../../hooks/data/post/useDeleteUserAccount";
import Password from "../Password/password";
import TitleFade from "../TitleFade/titleFade";

const MyAccountForm = ({userInfosData}) => {

    const {handleSubmit, isLoadingModificationUserInfos, alertBanner} = useModifiedUserInfos();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount } = useDeleteUserAccount();

    const [isPasswordValid,setIsPasswordValid] = useState(false);

    const handlesetIsPasswordValid = () => {
        setIsPasswordValid(!isPasswordValid)
    }

    
    const [isEditable, setIsEditable] = useState(false)

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
                return(<div key={index}></div>)
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

    return(
        <div className="sm:w-page m-auto pb-10">

        {alertBanner && alertBanner}
        {alertBannerDeleteAccount && alertBannerDeleteAccount}
        <TitleFade title="Espace mon compte"/>
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
                <div className={isEditable && "border-b border-gray-900/10 pb-2"}>
                    {inputs}
                </div>
                {!isEditable && <div>Vous avez parrainé {userInfosData.partnerNumber} personne{userInfosData.partnerNumber>1 && "s"}</div>}
               {isEditable && <div className="mt-6 flex items-center justify-end gap-x-6">
                    <ButtonValidationForm isLoading={isLoadingModificationUserInfos} size={"w-small"} title={"Sauvegarder"}/>
                </div>}
            </form>
        </Fragment>
    </div>
    );
}

export default MyAccountForm;