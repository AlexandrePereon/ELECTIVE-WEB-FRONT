import React,{ Fragment }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SubmissionTunnel from "../../components/SubmissionTunnel/submissionTunnel";

const AddProductPage = () => {

    const getUserInfosFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('userInfos'));
      };

    const userInfos = getUserInfosFromLocalStorage();

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <div className="w-4/6 m-auto">
                <SubmissionTunnel/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default AddProductPage;