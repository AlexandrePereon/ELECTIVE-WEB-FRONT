import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import Error404 from "../pages/error404";
import LoginForm from "../components/LoginForm/loginForm";
import SignupForm from "../components/SignupForm/signupForm";
import SubmissionTunnel from "../components/SubmissionTunnel/submissionTunnel";
import AddProductPage from "../pages/RestaurantPages/addProductPage";
import CreateRestaurantPage from "../pages/RestaurantPages/createRestaurantPage";
import UserHomePage from "../pages/ClientPages/userHomePage";
import RestaurantHomePage from "../pages/RestaurantPages/restaurantHomePage";
import DeliverymanHomePage from "../pages/DeliverymanPages/deliverymanHomePage";
import DevelopperHomePage from "../pages/DevelopperPages/developperHomePage";
import MarketingHomePage from "../pages/MarketingPages/marketingHomePage";
import RestaurantPage from "../pages/RestaurantPages/restaurantPage";
import MyAccountPage from "../pages/myAccountPage";
import DeliverymanMyDeliveriesPage from "../pages/DeliverymanPages/deliverymanMyDeliveriesPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* GENERAL ROUTES */}
        <Route path="*" element={<Error404/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="" element={<HomePage />} />

        {/* CLIENT ROUTES */}
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/user-accueil" element={<UserHomePage/>} />

        {/* DELIVERY ROUTES */}
        {/* <Route path="/delivery" element={} />
        <Route path="/delivery/current-delivery" element={} />
        <Route path="/delivery/current-delivery" element={} /> */}
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