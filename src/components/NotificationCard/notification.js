import React from "react";

const Notification = ({description, isSeen}) => {
    return(
        <li className="p-4">
                    <div className="flex">
                        <p className={`${isSeen ? "text-light-gray" : "text-green-500"} w-11/12 mr-3`}>{description}</p>
                        {!isSeen && <div className="bg-red-600 rounded-full drop-shadow-lg shadow-red-600 w-2.5 h-2.5 m-auto"></div>}
                    </div>
        </li>
    )
}

export default Notification;