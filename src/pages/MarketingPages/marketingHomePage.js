import React,{ Fragment, useState, useEffect }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Graph from "../../components/Graph/graph";
import Statistic from "../../components/Statistic/statistic";
import useAuthentication from "../../hooks/useAuthentication";
import Tab from "../../components/Tab/tab";
import useWebSocket from "../../hooks/useWebSocket";

const MarketingHomePage = () => {
    const [steps, setSteps] = useState(0);
    const handleOnSwitchSteps = (value) => {
      setSteps(value);
    }
    const{socket}=useWebSocket("/order/marketing");
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
            <Tab 
              steps={steps} 
              partsName={["Tableau de bord","Gestion des comptes"]} 
              handleOnSwitchSteps={handleOnSwitchSteps}
            />
            { steps === 0 ?
              <Fragment>
                <h1>Accueil Marketing</h1>
                <Graph dailySummary={dailySummary}/>
                <Statistic stats={stats}/>
              </Fragment>
            :
              <h1>Gestion</h1>
            }

            <Footer/>
        </Fragment>
    )
}

export default MarketingHomePage;