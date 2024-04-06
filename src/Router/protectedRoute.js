import React from "react";
import LoginPage from "../pages/loginPage";
import useAuthentication from "../hooks/useAuthentication";
import NotAllowedAccessPage from "../pages/notAllowedAccesPage";

const ProtectedRoute = ({children, allowedRoles}) => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const isAuthorized = userInfos && allowedRoles.includes(userInfos.role);

    let route = null;

    if (userInfos && isAuthorized) {
        route = children;
    }
    if (userInfos && !isAuthorized){
        route = <NotAllowedAccessPage/>
    }
    if (!userInfos) {
        route = <LoginPage/>
    }

    return route;
}

export default ProtectedRoute;