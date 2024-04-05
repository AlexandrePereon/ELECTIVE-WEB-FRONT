import React, { Fragment }  from "react";
import CreateRestaurantForm from "../../components/CreateRestaurantForm/createRestaurantForm";
import HeaderFake from "../../components/Header/headerFake";

const CreateRestaurantPage = () => {
    return (
        <Fragment>
            <HeaderFake/>
            <div className="w-4/6 m-auto">
                <CreateRestaurantForm/>
            </div>
        </Fragment>
    )
}

export default CreateRestaurantPage;