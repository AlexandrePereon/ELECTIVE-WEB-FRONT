import React,{ Fragment }  from "react";
import TitleFade from "../components/TitleFade/titleFade";
import Header from "../components/Header/header";
import LoginForm from "../components/LoginForm/loginForm";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoCesiEats.png"
import Footer from "../components/Footer/footer";

const LoginPage = () => {
    return (
        <Fragment>
            <Header/>
            <div className="sm:w-page m-auto pb-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-12">
                        <Link to="/">
                        <img
                            className="mx-auto w-48"
                            src={logo}
                            alt="CESI eats"
                            />
                    </Link>
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
                        Connectez-vous à votre compte
                        </h2>
                </div>
                <LoginForm/>
                <p className="mt-1 text-center text-sm text-gray-500">
                    Pas de compte ?{' '}
                    <Link to="/signup" className="font-semibold leading-6 text-medium-green hover:text-light-green">
                    Inscrivez-vous
                    </Link>
                </p>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default LoginPage;