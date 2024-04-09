import React,{ Fragment, useState }  from "react";
import Header from "../components/Header/header";
import useGetUserInfos from "../hooks/data/get/useGetUserInfos";
import Loader from "../components/Loader/loader";
import Footer from "../components/Footer/footer";
import MyAccountForm from "../components/MyAccountForm/myAccountForm";
import Tab from "../components/Tab/tab";
import MyRestaurantAccountForm from "../components/MyAccountForm/myRestaurantAccountForm";
import MyProductsAccountList from "../components/MyAccountForm/MyProductsAccountList";
import useAuthentication from "../hooks/useAuthentication";

const MyAccountPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfosFromSessionStorage = getUserInfosFromSessionStorage();

    const {userInfosData, isLoadingUserInfos}= useGetUserInfos();
    const [steps, setSteps]= useState(0);
    const handleOnSwitchSteps = (index) => {
        setSteps(index)
    }

    let form = null;
    switch (steps) {
        case 0:
            form =<MyAccountForm userInfosData={userInfosData && userInfosData}/>
        break;
        case 1:
            form = <MyRestaurantAccountForm restaurantId={userInfosFromSessionStorage.restaurant || userInfosData?.restaurant }/>
        break;
        case 2:
            form = <MyProductsAccountList restaurantId={userInfosFromSessionStorage.restaurant || userInfosData?.restaurant}/>  
        break;            
    }

    return (
        <Fragment>
            <Header role={userInfosData?.role}/>
            {userInfosData?.role === "restaurant" && 
                <Tab 
                    steps={steps} 
                    partsName={['Mon compte','Compte restaurant','Liste produits']} 
                    handleOnSwitchSteps={handleOnSwitchSteps}
                />
            }
            {isLoadingUserInfos ? <Loader/> : form}
            <Footer/>
        </Fragment>
    )
}

export default MyAccountPage;