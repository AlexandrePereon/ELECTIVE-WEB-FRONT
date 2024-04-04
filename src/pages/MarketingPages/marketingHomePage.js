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
    const [stats, setStats] = useState([])
    const [dailySummary, setDailySummary] = useState()
    const websocketUrl = `ws://app.localhost/order/marketing?socketToken=${getTokenFromSessionStorage()}`;
    const socket = new WebSocket(websocketUrl)

    useEffect(() => {
      socket.onopen = function (event) {
        console.log('Connexion établie à la socket Dashboard.');
      };
      socket.onmessage = function (event) {
        //todo : mettre à jour la socket
        const dataWebSocket = JSON.parse(event.data);
        setStats(Object.entries(dataWebSocket.orderCountsByStatus).map(([cle, valeur]) => ({ status: cle, value: valeur })))
        
        setDailySummary(dataWebSocket.dailySummary)
      };
      // Événement en cas d'erreur
      socket.onerror = function (error) {
        console.error('Erreur de connexion:', error);
      };

      // Événement lorsque la connexion est fermée
      socket.onclose = function (event) {
        console.log('Connexion fermée.');
      };
        return () => {
          socket.close();
        };
      }, []); 

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <h1>Accueil Marketing</h1>

            <Graph dailySummary={dailySummary}/>

            <Statistic stats={stats}/>

            <Footer/>
        </Fragment>
    )
}

export default MarketingHomePage;