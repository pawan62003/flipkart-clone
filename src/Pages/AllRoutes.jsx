import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Admin/Dashboard";
import  {Admin}  from "./Admin";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};
