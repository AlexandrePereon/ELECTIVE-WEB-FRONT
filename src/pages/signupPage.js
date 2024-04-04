import React,{ Fragment }  from "react";
import SignupForm from "../components/SignupForm/signupForm";
import TitleFade from "../components/TitleFade/titleFade";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const SignupPage = () => {
    return (
        <Fragment>
            <Header/>
            <div className="sm:w-page m-auto pb-10">
                <TitleFade title="Inscription"/>
                <SignupForm/>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default SignupPage;