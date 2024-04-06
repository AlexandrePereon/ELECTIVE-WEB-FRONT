import React, {useState, useEffect } from "react";
import {getTokenFromSessionStorage} from "../../utils/axios";
import NotificationCard from "../NotificationCard/notificationCard";
import useNotificationSeen from "../../hooks/data/post/useNotificationSeen";
import useWebSocket from "../../hooks/useWebSocket";


   
const HeaderNotification = ({role}) => {
    const{socket}=useWebSocket("/order/notification");
    const [numberNotif, setNumberNotif] = useState(0)
    const [tabNotif, setTabNotif] = useState()
    const{handleSubmit}=useNotificationSeen();
    
    useEffect(() => {
        socket.onmessage = function(event) { 
            try{
                const dataWebSocket = JSON.parse(event.data);
                setNumberNotif(dataWebSocket.filter(notif => !notif.seen).length)
                setTabNotif(dataWebSocket)
            } catch(error) {
                console.log(error)
            }
            };
        return () => {
            socket.close();
        };
      }, []); 

    return(
        <div className="flex-none">
            <div className="dropdown dropdown-end static">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={()=>{handleSubmit()}}>
                <div className="indicator">
                <svg width="35" height="35"  viewBox="0 0 40 50" className="text-medium-gray" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5479 36.2105C33.1434 35.6589 37.6587 34.5595 42 32.935C38.3234 28.8064 36.2919 23.4398 36.3 17.8776V16.0024C36.3 12.0235 34.7409 8.20757 31.9655 5.39409C29.1902 2.5806 25.4261 1 21.5012 1C17.5764 1 13.8122 2.5806 11.0369 5.39409C8.26161 8.20757 6.70246 12.0235 6.70246 16.0024V17.8776C6.7099 23.4401 4.67746 28.8068 1 32.935C5.27438 34.5353 9.7806 35.6479 14.4545 36.2105M28.5479 36.2105C23.8665 36.7734 19.1359 36.7734 14.4545 36.2105M28.5479 36.2105C28.9033 37.3353 28.9917 38.5294 28.8059 39.6954C28.62 40.8614 28.1652 41.9664 27.4784 42.9205C26.7916 43.8746 25.8923 44.6508 24.8536 45.186C23.815 45.7211 22.6663 46 21.5012 46C20.3361 46 19.1875 45.7211 18.1488 45.186C17.1102 44.6508 16.2108 43.8746 15.5241 42.9205C14.8373 41.9664 14.3824 40.8614 14.1966 39.6954C14.0107 38.5294 14.0991 37.3353 14.4545 36.2105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {numberNotif>0 && <span className="badge badge-sm indicator-item">{numberNotif}</span>}
                </div>
            </div>

            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-fit bg-base-100 shadow mr-5">
                <div className="card-body">
                <span className="font-bold text-lg m-auto">{numberNotif} Notifications</span>
                <NotificationCard role={role} tabNotifications={tabNotif}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeaderNotification;