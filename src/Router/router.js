import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import Error404 from "../pages/error404";
import AddProductPage from "../pages/RestaurantPages/addProductPage";
import CreateRestaurantPage from "../pages/RestaurantPages/createRestaurantPage";
import UserHomePage from "../pages/ClientPages/userHomePage";
import RestaurantHomePage from "../pages/RestaurantPages/restaurantHomePage";
import DeliverymanHomePage from "../pages/DeliverymanPages/deliverymanHomePage";
import DevelopperHomePage from "../pages/DevelopperPages/developperHomePage";
import MarketingHomePage from "../pages/MarketingPages/marketingHomePage";
import DeliverymanMyDeliveriesPage from "../pages/DeliverymanPages/deliverymanMyDeliveriesPage";
import RestaurantPage from "../pages/RestaurantPages/restaurantPage";
import MyAccountPage from "../pages/myAccountPage";
import RestaurantsSelectionPage from "../pages/restaurantsSelectionPage";
import SignupPage from "../pages/signupPage";
import LoginPage from "../pages/loginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* GENERAL ROUTES */}
        <Route path="*" element={<Error404/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="" element={<HomePage />} />

        {/* CLIENT ROUTES */}
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/user-accueil" element={<UserHomePage/>} />
        <Route path="/restaurant-accueil" element={<RestaurantHomePage/>} />
        <Route path="/deleveryman-accueil" element={<DeliverymanHomePage/>} />
        <Route path="/developper-accueil" element={<DevelopperHomePage/>} />
        <Route path="/commercial-tableau-de-bord/" element={<MarketingHomePage/>} />
        <Route path="/restaurants" element={<RestaurantsSelectionPage/>} />
       
        {/* DELIVERY ROUTES */}
        <Route path="/deliveryman-accueil" element={<DeliverymanHomePage/>} />
        <Route path="/deliveryman-accueil/mes-courses" element={<DeliverymanMyDeliveriesPage/>} />


        {/* RESTAURANT ROUTES */}
        <Route path="/restaurant-accueil/soumission" element={<AddProductPage/>} />
        <Route path="/restaurant-accueil/creation_restaurant" element={<CreateRestaurantPage/>} />
        <Route path="/restaurant-accueil/restaurant/:id?" element={<RestaurantPage/>} />
        
        {/* COMMONS ROUTES */}
        <Route path="/mon-compte" element={<MyAccountPage/>} />


        {/* DEVELOPPER ROUTES */}
        <Route path="/developper-accueil" element={<DevelopperHomePage/>} />
        
        {/* MARKETING ROUTES */}
        <Route path="/marketing-accueil" element={<MarketingHomePage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;