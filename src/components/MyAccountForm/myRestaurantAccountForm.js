import React,{ Fragment, useState }  from "react";
import restaurantFormData from "../../formData/restaurantFormData";
import Input from "../Input/input";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";
import TitleFade from "../TitleFade/titleFade";
import useDeleteRestaurantAccount from "../../hooks/data/post/useDeleteRestaurantAccount";
import useGetRestaurantById from "../../hooks/data/get/useGetRestaurantById";
import useModifiedRestaurantInfos from "../../hooks/data/post/useModifiedRestaurantInfos";
import FileUploader from "../FileUploader/fileUploader";
import ButtonWithVerification from "../ButtonWithVerification/buttonWithVerification";

const MyRestaurantAccountForm = ({restaurantId}) => {

    const {restaurantData} = useGetRestaurantById(restaurantId);

    const {handleSubmit, isLoadingModificationRestaurantInfos, alertBanner} = useModifiedRestaurantInfos();
    const { handleDeleteAccount, isLoadingDeleteAccount, alertBannerDeleteAccount } = useDeleteRestaurantAccount();

    const [imageValue, setImageValue] = useState(null);

    const handleSetImageValue = (value) => {
        setImageValue(value)
    }

    
    const [isEditable, setIsEditable] = useState(false)

    const inputs = restaurantFormData.map((input, index)=>{
            if (input.id ==="image" && isEditable) {
                return <FileUploader 
                imagePreviewModification={restaurantData && restaurantData[input.id]}
                handleOnChange={handleSetImageValue}
                id={input.id} 
                key={index}/>
            } else if (input.id ==="image" && !isEditable) {
                return(<img src={restaurantData && restaurantData[input.id]} alt="Prévisualisation de l'image" className="rounded-full max-w-full max-h-48 m-auto" key={index}/>)
            }else {
                return (<Input
                defaultValue={restaurantData && restaurantData[input.id]}
                title={input.title}
                id={input.id}
                type={input.type}
                size={input.size}
                isDisable={!isEditable || input.id === "partnerCode"}
                options={input.type === "select" && input.options}
                key={index}/>)    
                
            }})

    return(
        <div>

        {alertBanner && alertBanner}
        {alertBannerDeleteAccount && alertBannerDeleteAccount}
        <TitleFade title="Espace mon compte"/>
        <Fragment>
            {restaurantData &&      
                <div className="">
                    <button
                    type="button"
                    onClick={()=>{setIsEditable(!isEditable)}}
                    className={`rounded-md w-small bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    >
                        Modifier
                    </button>
                    <ButtonWithVerification query={handleDeleteAccount} isLoading={isLoadingDeleteAccount} id={restaurantId}/>
                </div>
            }
            <form action="#" method="PUT" onSubmit={(e) => handleSubmit(e, imageValue)}>
                <div className={isEditable && "border-b border-gray-900/10 pb-2"}>
                    {inputs}
                </div>
               {isEditable && <div className="mt-6 flex items-center justify-end gap-x-6">
                    <ButtonValidationForm isLoading={isLoadingModificationRestaurantInfos} size={"w-small"} title={"Sauvegarder"}/>
                </div>}
            </form>
        </Fragment>
    </div>
    );
}

export default MyRestaurantAccountForm;