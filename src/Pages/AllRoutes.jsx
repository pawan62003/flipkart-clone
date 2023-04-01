import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Admin/Dashboard";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail";
import ProductPage from "./ProductPage";
import { EditProducts } from "./EditProducts";
import { Admin } from "./Admin";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/dashboard/admin" element={<Admin/>}/>
			<Route path="/edit/:id" element={<EditProducts/>}/>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="*" element={<ErrorPage />} />
			<Route path="/product" element={<ProductPage/>} />
			<Route path="/product/:id" element={<ProductDetail/>} />
		</Routes>
	);
};
