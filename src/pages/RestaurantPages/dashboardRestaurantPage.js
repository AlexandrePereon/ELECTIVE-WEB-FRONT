import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import useAuthentication from "../../hooks/useAuthentication";
import TitleFade from "../../components/TitleFade/titleFade";
import useWebSocket from "../../hooks/useWebSocket";

const DashboardRestaurantPage = () => {

    const{socket}=useWebSocket("/order/restaurant");
    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const [stats, setStats] = useState([])
    const [dailySummary, setDailySummary] = useState()

    useEffect(() => {
      socket.onmessage = function (event) {
        try {
          const dataWebSocket = JSON.parse(event.data);
          setStats(Object.entries(dataWebSocket && dataWebSocket.orderCountsByStatus).map(([cle, valeur]) => ({ status: cle, value: valeur })))
          setDailySummary(dataWebSocket && dataWebSocket.dailySummary)
        } catch (error) {
          console.log(error)
        }
      };
        return () => {
          socket.close();
        };
      }, []); 

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
                <TitleFade title="Tableau de bord"/>
                <Graph dailySummary={dailySummary}/>
                <Statistic stats={stats}/>
            <Footer/>
        </Fragment>
    )
}

export default DashboardRestaurantPage;