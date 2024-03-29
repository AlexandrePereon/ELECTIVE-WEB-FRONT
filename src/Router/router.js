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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* CLIENT ROUTES */}
        <Route path="" element={<HomePage />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="*" element={<Error404/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
        {/* <Route path="/delivery/current-delivery" element={} /> */}
        {/* DELIVERY ROUTES */}
        {/* <Route path="/delivery" element={} />
        <Route path="/delivery/current-delivery" element={} />
        <Route path="/delivery/current-delivery" element={} /> */}
        {/* RESTAURANT ROUTES */}
        <Route path="/restaurant/soumission" element={<AddProductPage/>} />
        <Route path="/restaurant/creation-restaurant" element={<CreateRestaurantPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;