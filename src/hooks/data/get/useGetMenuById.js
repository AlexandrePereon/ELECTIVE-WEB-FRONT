import { useState, useEffect } from "react";
import {axiosReq} from "../../../utils/axios";

const useGetMenuById = (menuID) => {

    const [menuData, setMenuData] = useState(null);
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);   

    useEffect(() => {
        const getMenuById = async (menuID) => {
            setIsLoadingMenu(true);
            try {
                const response = await axiosReq.get(`${process.env.REACT_APP_API_PREFIX_RESTAURANT}menu/${menuID}`);
                if (response) {
                    setMenuData(response.data);
                }
            } catch (error) {
            } finally {
                setIsLoadingMenu(false);
            }
        };

        getMenuById(menuID);
    }, [menuID]);

    return {menuData, isLoadingMenu};
}

export default useGetMenuById;