import * as React from "react";
// import Homescreen from "./component/Homescreen";
import { AllRoutes } from "./Pages/AllRoutes";

// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import ErrorPage from "./Pages/ErrorPage";
// import Dashbord from "./component/Pages/Dashbord";

// import Contact from "./component/Pages/Contact";
// import NotFound from "./component/Pages/NotFound";
// import Login from "./component/Pages/Login";

// import Products from "./component/Pages/Products";

function App() {
	// 2. Wrap ChakraProvider at the root of your app

	const theme = extendTheme({
		Link: {
			baseStyle: {
				textDecoration: "none",
				_hover: {
					textDecoration: "none",
				},
			},
		},
	});
	return (
		<ChakraProvider theme={theme}>
			<AllRoutes />
		</ChakraProvider>
	);
}

export default App;
