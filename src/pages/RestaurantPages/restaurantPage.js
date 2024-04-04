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
import AddNumberButton from "../../components/AddNumberButton/addNumberButton";
import OrderSummary from "../../components/OrderSummary/orderSummary";

const RestaurantPage = () => {

    const {getUserInfosFromSessionStorage}=useAuthentication();
    const userInfos = getUserInfosFromSessionStorage();

    const restaurantId = window.location.href.split('restaurant-accueil/restaurant/')[1];

    const [paginationMenus, setPaginationMenus]=useState(1)
    const [paginationArticles, setPaginationArticles]=useState(1)
    const [shoppingCart, setShoppingCart]=useState({
        menus: [],
        articles: []
      })
    
    
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

    const handleListShoppingCartChange = (value, type, action) => {
        if (action === "add") {
            if (type === "menus") {
                setShoppingCart(prevState => ({
                    ...prevState,
                    menus: [...prevState.menus, value],
                }));
            } 
            if (type === "articles") {
                setShoppingCart(prevState => ({
                    ...prevState,
                    articles: [...prevState.articles, value],
                }));
            }
        } 
        if (action === "remove") {
            if (type === "menus") {
                const menuIndex = shoppingCart.menus.findIndex(menu => menu === value);
                if (menuIndex !== -1) {
                    const newMenus = [...shoppingCart.menus];
                    newMenus.splice(menuIndex, 1);
                    setShoppingCart(prevState => ({
                        ...prevState,
                        menus: newMenus,
                    }));
                }
            } 
            if (type === "articles") {
                const articleIndex = shoppingCart.articles.findIndex(article => article === value);
                if (articleIndex !== -1) {
                    const newArticles = [...shoppingCart.articles];
                    newArticles.splice(articleIndex, 1);
                    setShoppingCart(prevState => ({
                        ...prevState,
                        articles: newArticles,
                    }));
                }
            }
        }
    };

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
                         <AddNumberButton
                         value={item._id}
                         numberOfArticle={shoppingCart.articles.filter(id => id === item._id).length}
                         handleOnChange={handleListShoppingCartChange}
                         type="articles"
                         />
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
                        <AddNumberButton
                            value={item._id}
                            numberOfArticle={shoppingCart.menus.filter(id => id === item._id).length}
                            handleOnChange={handleListShoppingCartChange}
                            type="menus"
                        />
                    </Card>)} 
                </CardList>
                <OrderSummary 
                    order={shoppingCart} 
                    restaurantId={restaurantId}
                />
            <Footer/>
        </Fragment>
    )
}

export default RestaurantPage;