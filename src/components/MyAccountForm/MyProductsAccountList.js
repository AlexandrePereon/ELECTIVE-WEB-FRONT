import React,{ Fragment, useState }  from "react";
import TitleFade from "../TitleFade/titleFade";
import useGetAllArticlesFromRestaurant from "../../hooks/data/get/useGetAllArticlesFromRestaurant";
import useGetAllMenusFromRestaurant from "../../hooks/data/get/useGetAllMenusFromRestaurant";
import useDeleteArticle from "../../hooks/data/post/useDeleteArticle";
import useDeleteMenu from "../../hooks/data/post/useDeleteMenu";
import MyProductsAccountForm from "./myProductsAccountForm";

const MyProductsAccountList = ({restaurantId}) => {

    const { handleDeleteArticle, alertBannerDeleteArticle } = useDeleteArticle();
    const [paginationArticles, setPaginationArticles]=useState(1)
    const {articlesData, maxPageArticles} = useGetAllArticlesFromRestaurant(restaurantId,paginationArticles);
    
    const { handleDeleteMenu, alertBannerDeleteMenu } = useDeleteMenu();
    const [paginationMenus, setPaginationMenus]=useState(1)
    const {menusData, maxPageMenus} = useGetAllMenusFromRestaurant(restaurantId,paginationMenus);

    const handleSetPagination = (value, type) => {
        if((value>0) && (value<=maxPageArticles)){
            type === "article" &&  setPaginationArticles(value)
            type === "menu" &&  setPaginationMenus(value)
        }
    }

    return(
        <div className="sm:w-page m-auto pb-10">
        {alertBannerDeleteArticle && alertBannerDeleteArticle}
        <TitleFade title="Espace modification produits"/>
        {articlesData && <MyProductsAccountForm
            handleDelete={handleDeleteArticle}
            productData={articlesData}
            handleSetPagination={handleSetPagination}
            maxPage={maxPageArticles}
            pagination={paginationArticles}
            type={"article"}
        />}
        {menusData && <MyProductsAccountForm
            handleDelete={handleDeleteMenu}
            productData={menusData}
            handleSetPagination={handleSetPagination}
            maxPage={maxPageMenus}
            pagination={paginationMenus}
            type={"menu"}
        />}

    </div>
    );
}

export default MyProductsAccountList;