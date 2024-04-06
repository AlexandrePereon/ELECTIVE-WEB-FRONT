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
import ProtectedRoute from "./protectedRoute";

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
        <Route path="/user-accueil" element={
          <ProtectedRoute allowedRoles={['user']}>
            <UserHomePage/>
          </ProtectedRoute>
        } />
        <Route path="/user-accueil/restaurants" element={
          <ProtectedRoute allowedRoles={['user']}>
            <RestaurantsSelectionPage/>
          </ProtectedRoute>
        } />
        <Route path="/user-accueil/restaurant/:id?" element={<RestaurantPage/>} />
       
        {/* DELIVERY ROUTES */}
        <Route path="/deliveryman-accueil" element={
          <ProtectedRoute allowedRoles={['deliveryman']}>
            <DeliverymanHomePage/>
          </ProtectedRoute>
        } />
        <Route path="/deliveryman-accueil/mes-courses" element={
          <ProtectedRoute allowedRoles={['deliveryman']}>
            <DeliverymanMyDeliveriesPage/>
          </ProtectedRoute>
        } />


        {/* RESTAURANT ROUTES */}
        <Route path="/restaurant-accueil" element={
          <ProtectedRoute allowedRoles={['restaurant']}>
            <RestaurantHomePage/>
          </ProtectedRoute>
        }/>
        <Route path="/restaurant-accueil/soumission" element={
          <ProtectedRoute allowedRoles={['restaurant']}>
            <AddProductPage/>
          </ProtectedRoute>
        }/>
        <Route path="/restaurant-accueil/creation_restaurant" element={
          <ProtectedRoute allowedRoles={['restaurant']}>
            <CreateRestaurantPage/>
          </ProtectedRoute>
        } />
        
        {/* COMMONS ROUTES */}
        <Route path="/mon-compte" element={
          <ProtectedRoute allowedRoles={['user', 'restaurant', 'deliveryman', 'developer', 'marketing', 'technical']}>
            <MyAccountPage/>
          </ProtectedRoute>
        } />


        {/* DEVELOPPER ROUTES */}
        <Route path="/developper-accueil" element={
        <ProtectedRoute allowedRoles={['developper']}>
                  <DevelopperHomePage/>
        </ProtectedRoute>
        } />
        
        {/* MARKETING ROUTES */}
        <Route path="/marketing-accueil" element={
          <ProtectedRoute allowedRoles={['marketing']}>
            <MarketingHomePage/>
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;