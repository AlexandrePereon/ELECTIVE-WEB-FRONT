import React,{ Fragment, useState }  from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import useAuthentication from "../hooks/useAuthentication";
import Tab from "../components/Tab/tab";
import HistoryOrderSectionInProgress from "../components/HistoryOrderSections/historyOrderSectionInProgress";
import HistoryOrderSectionFinished from "../components/HistoryOrderSections/historyOrderSectionFinished";
import HistoryOrderSectionRequest from "../components/HistoryOrderSections/historyOrderSectionRequest";
import HistoryOrderSectionFinalization from "../components/HistoryOrderSections/historyOrderSectionFinalization";
import HistoryOrderSectionToDeliver from "../components/HistoryOrderSections/historyOrderSectionToDeliver";
import { useLocation } from "react-router";

const HistoryOrderPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();
    const location = useLocation();
    const { hash } = location;

    const [steps, setSteps] = useState(Number(hash.substring(1)) || 0);
    const handleOnSwitchSteps = (value) => {
        setSteps(value)
        window.location.hash = `#${value}`;
    }
    let parts = null;
    let content = null;
    switch (userInfos?.role) {
        case 'user':
            parts = ['Demande de commandes','Commandes en cours','Commandes passées']
            content=[<HistoryOrderSectionRequest role={userInfos?.role}/>,
                    <HistoryOrderSectionInProgress role={userInfos?.role}/>,
                    <HistoryOrderSectionFinished role={userInfos?.role}/>]

            break;
        case 'restaurant':
            parts = ['Demande de commandes','Commandes en cours','Commandes passées']
            content=[<HistoryOrderSectionRequest role={userInfos?.role}/>,
                    <HistoryOrderSectionInProgress role={userInfos?.role}/>,
                    <HistoryOrderSectionFinished role={userInfos?.role}/>]
        break;
        case 'deliveryman':
            parts = ['Commandes à livrer','Aquittement de commandes']
            content=[<HistoryOrderSectionToDeliver role={userInfos?.role}/>,
                    <HistoryOrderSectionFinalization role={userInfos?.role}/>]
        break;
    }

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <div className="lg:w-page m-auto pb-10 h-screen">
                <Tab partsName={parts} steps={steps} handleOnSwitchSteps={handleOnSwitchSteps}/>
                {content[steps]}
            </div>
            <Footer/>
        </Fragment>
    )
}

export default HistoryOrderPage;