import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notification = ({role, description, isSeen}) => {
    return(
        <li className="p-4">
                <Link to={`/${role}-accueil`}>
                    <div className="flex">
                        <p className="text-green-500 w-11/12 mr-3">{description}</p>
                        {!isSeen && <div className="bg-red-600 rounded-full drop-shadow-lg shadow-red-600 w-2.5 h-2.5 m-auto"></div>}
                    </div>
                </Link>

        </li>
    )
}

export default Notification;