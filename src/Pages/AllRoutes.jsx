import React from "react";
import { Route, Routes } from "react-router-dom";
import  Admin  from "./Admin";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import ProductPage from "./ProductPage";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="*" element={<ErrorPage />} />
			<Route path="/product" element={<ProductPage/>} />
			<Route path="/product/:id" element={<ProductDetail/>} />
		</Routes>
	);
};
