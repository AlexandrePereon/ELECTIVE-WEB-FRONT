import React,{ Fragment }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SubmissionTunnel from "../../components/SubmissionTunnel/submissionTunnel";

const AddProductPage = () => {

    const getUserInfosFromSessionStorage = () => {
        return JSON.parse(sessionStorage.getItem('userInfos'));
      };

    const userInfos = getUserInfosFromSessionStorage();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <div className="w-4/6 m-auto">
                <SubmissionTunnel restaurantId={userInfos.restaurantId}/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default AddProductPage;