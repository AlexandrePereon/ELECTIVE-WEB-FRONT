import React, { Fragment, useState } from "react";
import Card from "../../components/Card/card";
import Skeleton from "../../components/Skeleton/skeleton";
import AddNumberButton from "../../components/AddNumberButton/addNumberButton";
import OrderSummary from "../../components/OrderSummary/orderSummary";
import useGetAllMenusFromRestaurant from "../../hooks/data/get/useGetAllMenusFromRestaurant";
import useGetAllArticlesFromRestaurant from "../../hooks/data/get/useGetAllArticlesFromRestaurant";
import CardList from "../../components/CardList/cardList";
import TitleFade from "../../components/TitleFade/titleFade";

const ProductRestaurantForm = ({restaurantId}) => {
    
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
    return(
        <div className="sm:w-3/4 m-auto">
            <TitleFade title="Liste articles :"/>
            {maxPageArticles === null ? "Aucun article" : <CardList 
                pagination={paginationArticles}
                maxPagination={maxPageArticles}
                handleSetPagination={handleSetPagination}
                type="articles"
            >
                {articlesData && articlesData.map((item, index)=>
                    <Card
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
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
            }  
            <TitleFade title="Liste menus :"/>
            {maxPageMenus === null?"Aucun menus.":<CardList 
                pagination={paginationMenus}
                maxPagination={maxPageMenus}
                handleSetPagination={handleSetPagination}
                type="menus"
            >
                {menusData && menusData.map((item, index)=>
                    <Card
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
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
                }
                <OrderSummary 
                    order={shoppingCart} 
                    restaurantId={restaurantId}
                />
        </div>
    );
}

export default ProductRestaurantForm;