import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import {getTokenFromSessionStorage} from "../../utils/axios";

const MarketingHomePage = () => {
    const getUserInfosFromSessionStorage = () => {
        return JSON.parse(sessionStorage.getItem('userInfos'));
      };
    const userInfos = getUserInfosFromSessionStorage();

    const [stats, setStats] = useState([])
    const [dailySummary, setDailySummary] = useState()
    const websocketUrl = `ws://app.localhost/order/marketing?socketToken=${getTokenFromSessionStorage()}`;
    const socket = new WebSocket(websocketUrl)
    useEffect(() => {
        socket.onopen = function(event) {};

        socket.onmessage = function(event) {
          const dataWebSocket = JSON.parse(event.data);
          setStats(Object.entries(dataWebSocket.orderCountsByStatus).map(([cle, valeur]) => ({ status: cle, value: valeur })))
          setDailySummary(dataWebSocket.dailySummary)
        };

        socket.onerror = function(error) {};
        socket.onclose = function(event) {};
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