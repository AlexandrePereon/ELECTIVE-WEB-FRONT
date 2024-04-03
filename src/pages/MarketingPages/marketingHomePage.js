import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import {getTokenFromSessionStorage} from "../../utils/axios";
import useAuthentication from "../../hooks/useAuthentication";

const MarketingHomePage = () => {
    
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    console.log(userInfos)
    console.log(getTokenFromSessionStorage())

        const websocketUrl = `ws://app.localhost/order/marketing?socketToken=${getTokenFromSessionStorage()}`;
    
        //Créer une nouvelle instance WebSocket
        const socket = new WebSocket(websocketUrl)
        console.log(socket)

    useEffect(() => {
    //     // Événement lorsque la connexion est établie
        socket.onopen = function(event) {
          console.log('Connexion établie.');
          console.log('Event reçu:', event.type);
        };
        
    //     // Événement pour recevoir les messages
        socket.onmessage = function(event) {
          console.log('Message reçu:', event.data);
          console.log('Event reçu:', event.type);
          
        };
        
    //     // Événement en cas d'erreur
        socket.onerror = function(error) {
          console.error('Erreur de connexion:', error);
        };
        
    //     // Événement lorsque la connexion est fermée
        socket.onclose = function(event) {
          console.log('Connexion fermée.');
          console.log('Event reçu:', event.type);
        };
        
    //     // Nettoyage de la connexion WebSocket lors du démontage du composant
        return () => {
          socket.close();
        };
        }, []); // Effectuer la connexion une seule fois au chargement du composant

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>Accueil Marketing</h1>

            <Graph/>

            <Statistic/>

            <Footer/>
        </Fragment>
    )
}

export default MarketingHomePage;