import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useAuthentication from "../../hooks/useAuthentication";
import {axiosReq} from "../../utils/axios";

const UserHomePage = () => {
    const {getUserInfosFromSessionStorage} = useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const testRefreshToken = async (e) => {
        e.preventDefault();
        try {
            
            console.log(JSON.parse(sessionStorage.getItem('token')).valeur)
            let dateExpiration = new Date().getTime() + (15 * 60 * 1000);
            sessionStorage.setItem('token', JSON.stringify({ valeur: "fake", expiration: dateExpiration }));
            console.log(JSON.parse(sessionStorage.getItem('token')).valeur)
            const response = await axiosReq.post("/order/create" , {
                menus: [],
                articles: [
                  "660bb502594a2183a3110dda"
                ],
                restaurantId: "660bb47d594a2183a3110dd6"
              })

            if (response) {
              console.log("Commande créer !")
            }
          } catch (error) {
            console.log(error)
          }
        };

    return (
        <Fragment>
            <Header role={userInfos?.role}/>

            <h1>Accueil Utilisateur</h1>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={(e) => testRefreshToken(e)} >
                <div className="indicator">
                    <p> test refreshToken</p>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default UserHomePage;