import React from "react";
import { Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ErrorPage() {
	return (
		<>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					fontSize: "14px",
					padding: "20px",
					marginTop: "100px",
				}}>
				<div>
					<img
						style={{ width: "450px", maxWidth: "100%", margin: "auto" }}
						src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
						alt=""
					/>
					<div
						style={{
							fontSize: "1.3em",
							paddingTop: "10px",
							marginBottom: "35px",
						}}>
						Unfortunately the page you are looking for has been moved or deleted
						<br />
						<Button colorScheme="blue" m="5px">
							Go to Home Page
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ErrorPage;
