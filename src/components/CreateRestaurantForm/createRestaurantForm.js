import React,{ Fragment, useState }  from "react";
import restaurantFormData from "../../formData/restaurantFormData";
import Input from "../Input/input";
import TitleFade from "../TitleFade/titleFade";
import FileUploader from "../FileUploader/fileUploader";
import ButtonValidationForm from "../ButtonValidationForm/buttonValidationForm";
import usePostRestaurant from "../../hooks/data/post/usePostRestaurant";

const CreateRestaurantForm = () => {

    const [imageValue, setImageValue] = useState(null);

    const handleSetImageValue = (value) => {
        setImageValue(value)
    }

    const inputs = restaurantFormData.map((input,index)=>{
    if (input.type === "picture") {
        return <FileUploader 
        handleOnChange={handleSetImageValue}
        id={input.id} 
        key={index}/>
    }else{
        return <Input
        title={input.title}
        id={input.id}
        type={input.type}
        size={input.size}
        key={index}
    />}})

    const {handleSubmit, isLoading, alertBanner} = usePostRestaurant();

    return (
        <form action="#" method="POST" onSubmit={(e) => handleSubmit(e, imageValue)}>
            {alertBanner && alertBanner}
            <div className="border-b border-gray-900/10 pb-2">
                <TitleFade title={"Création de votre restaurant"}/>
                {inputs}  
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 pb-2">
                <ButtonValidationForm isLoading={isLoading} title={"Créer le restaurant"}/>              
            </div>
        </form>
    )
}

export default CreateRestaurantForm;