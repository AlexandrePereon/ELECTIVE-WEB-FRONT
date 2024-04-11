import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import useAuthentication from "../../hooks/useAuthentication";
import useWebSocket from "../../hooks/useWebSocket";
import TitleFade from "../../components/TitleFade/titleFade";

const MarketingDashboardPage = () => {

    const{socket}=useWebSocket(`${process.env.REACT_APP_API_PREFIX_ORDER}marketing`);
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
          dataWebSocket && setStats((prevstats) => [...prevstats, {status: "Prix total", value: Math.round(dataWebSocket.totalPrice)}]);
        } catch (error) {
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
                <div className="m-auto pb-10">    
                  <Statistic stats={stats}/>
                </div>

            <Footer/>
        </Fragment>
    )
}

export default MarketingDashboardPage;