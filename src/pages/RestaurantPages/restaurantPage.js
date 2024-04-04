import React,{ Fragment, useState }  from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import useGetAllMenusFromRestaurant from "../../hooks/data/get/useGetAllMenusFromRestaurant";
import useGetAllArticlesFromRestaurant from "../../hooks/data/get/useGetAllArticlesFromRestaurant";
import CardList from "../../components/CardList/cardList";
import TitleFade from "../../components/TitleFade/titleFade";
import useAuthentication from "../../hooks/useAuthentication";
import Card from "../../components/Card/card";
import Skeleton from "../../components/Skeleton/skeleton";

const RestaurantPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const restaurantId = window.location.href.split('restaurant-accueil/restaurant/')[1];

    const [paginationMenus, setPaginationMenus]=useState(1)
    const [paginationArticles, setPaginationArticles]=useState(1)
    
    
    const {menusData, isLoadingMenus, maxPageMenus} = useGetAllMenusFromRestaurant(restaurantId, paginationMenus);
    const {articlesData, isLoadingArticles, maxPageArticles} = useGetAllArticlesFromRestaurant(restaurantId, paginationArticles);
    
    const handleSetPagination = (value, type) => {
        if((value>0) && (value<=maxPageMenus)){
            type === "menus" && setPaginationMenus(value);
        }
        if((value>0) && (value<=maxPageArticles)){
            type === "articles" &&  setPaginationArticles(value) 
        }
    }

    return (
        <Fragment>
            <Header role={userInfos?.role}/>
            <TitleFade title="Page restaurant"/>
            <TitleFade title="Liste articles :"/>
            <CardList 
                pagination={paginationArticles}
                maxPagination={maxPageArticles}
                handleSetPagination={handleSetPagination}
                type="articles"
            >
                {isLoadingArticles ?
                    <Skeleton/> :
                    articlesData && articlesData.map((item, index)=>
                    <Card
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    key={index}
                    >
                         <button className={`${isLoadingArticles && "skeleton"} btn btn-primary`}>Buy Now</button>
                    </Card>)} 

            </CardList>
            <TitleFade title="Liste menus :"/>
            <CardList 
                pagination={paginationMenus}
                maxPagination={maxPageMenus}
                handleSetPagination={handleSetPagination}
                type="menus"
            >
                {isLoadingMenus ?
                    <Skeleton/> :
                    menusData && menusData.map((item, index)=>
                    <Card
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    key={index}
                    >
                        <button className={`${isLoadingMenus && "skeleton"} btn btn-primary`}>Buy Now</button>
                    </Card>)} 
                </CardList>
            <Footer/>
        </Fragment>
    )
}

export default RestaurantPage;