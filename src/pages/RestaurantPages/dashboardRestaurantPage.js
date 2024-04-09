import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import useAuthentication from "../../hooks/useAuthentication";
import TitleFade from "../../components/TitleFade/titleFade";
import useWebSocket from "../../hooks/useWebSocket";

const DashboardRestaurantPage = () => {

    const{socket}=useWebSocket(`${process.env.REACT_APP_API_PREFIX_ORDER}restaurant`);
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
              <div className="sm:w-page m-auto pb-10">
                  <TitleFade title="Tableau de bord"/>
              </div>
                  <Graph dailySummary={dailySummary}/>
                  <div className="sm:w-page m-auto pb-10">    
                  <Statistic stats={stats}/>
                  </div>
             
            <Footer/>
        </Fragment>
    )
}

export default DashboardRestaurantPage;