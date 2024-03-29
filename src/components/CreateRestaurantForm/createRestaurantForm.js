import React,{ Fragment }  from "react";
import restaurantFormData from "../../formData/restaurantFormData";
import Input from "../Input/input";
import TitleFade from "../TitleFade/titleFade";

const CreateRestaurantForm = () => {

    const inputs = restaurantFormData.map((input,index)=><Input
        title={input.title}
        id={input.id}
        type={input.type}
        size={input.size}
        key={index}
    />)

    return (
        <Fragment>
            <TitleFade title={"Création de votre restaurant"}/>
            {inputs}                
        </Fragment>
    )
}

export default CreateRestaurantForm;