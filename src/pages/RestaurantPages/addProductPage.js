import React,{ Fragment }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SubmissionTunnel from "../../components/SubmissionTunnel/submissionTunnel";
import useAuthentication from "../../hooks/useAuthentication";
import useGetUserInfos from "../../hooks/data/get/useGetUserInfos";

const AddProductPage = () => {

    const {getUserInfosFromSessionStorage} = useAuthentication();
    const userInfosFromSessionStorage = getUserInfosFromSessionStorage()

    const {userInfosData}= useGetUserInfos();

    return (
        <Fragment>
            <Header role={userInfosFromSessionStorage?.role}/>
            <div className="sm:w-4/6 m-auto">
                <SubmissionTunnel restaurantId={userInfosFromSessionStorage.restaurant || userInfosData?.restaurant}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default AddProductPage;