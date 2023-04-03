import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/ProductReducer/action";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { AdminNavbar } from "../Components/Admin/AdminNavbar";
const initialState = {
	image: "",
	title: "",
	price: "",
	id: "",
	category: "",
};

const thStyle = {
	paddinBbottom: " 12px",
	textAlign: " left",
	backgroundColor: "yellow",
	color: "black",
	textAlign: " center",
};
let newData = [];
export const Admin = () => {
	const navigate = useNavigate();
	const [product, setProduct] = useState(initialState);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addProduct(product));
		console.log(product);

		setProduct(initialState);
	};
	newData.push(product);
	console.log(newData);
	return (
		<div style={{ border: "1px solid black", marginTop: "15px" }}>
		  <AdminNavbar/>
			<h3 style={{ marginBottom: "10px", fontSize: "25px" }}>
				Add New Products
			</h3>
			{/* <AdminNavbar/> */}
			<DIV>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={(e) => {
							handleChange(e);
						}}
						placeholder="Image URL"
						name="image"
						value={product.image}
					/>
					<input
						type="text"
						onChange={(e) => {
							handleChange(e);
						}}
						placeholder="Title"
						name="title"
						value={product.title}
					/>
					<input
						type="text"
						onChange={(e) => {
							handleChange(e);
						}}
						placeholder="Price"
						name="price"
						value={product.price}
					/>
					<select name="category" id="">
						<option value="">Select Category</option>
						<option value="t-shirts">Men</option>
						<option value="women">Women</option>
						<option value="kids">Kids</option>
						<option value="spice">Spices</option>
						<option value="vegetable">Vegetables</option>
						<option value="dairy">Dairy Goods</option>
						<option value="grain">Whole Grain</option>
					</select>
					<button type="submit">Add</button>
				</form>
			</DIV>
			{newData.length !== 0 ? (
				<div>
					<table
						style={{
							width: "60%",
							margin: "auto",
							marginTop: "50px",
							textAlign: "center",
						}}>
						<thead style={{ border: "1px solid gray", textAlign: "center" }}>
							<tr>
								<th style={thStyle}>Image</th>
								<th style={thStyle}>Title</th>
								<th style={thStyle}>Price</th>
								<th style={thStyle}>Category</th>
								<th style={thStyle}>Action</th>
							</tr>
						</thead>
						<tbody>
							{newData.map((item, index) => {
								console.log(item);
								return (
									<tr key={index}>
										<td>{item.image}</td>
										<td>{item.title}</td>
										<td>{item.price}</td>
										<td>{item.category}</td>
										<td>
											<button style={{ marginRight: "15px" }}>
												<Link to={`/edit/${index}`}>Edit</Link>
											</button>
											<button
												onClick={() => {
													setProduct(item);
												}}>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				""
			)}
		</div>
	);
};

const DIV = styled.div`
	border: 1px solid black;
	padding: 0;
	margin: 0;
	/* background-color: #6b9cd5; */
	height: 100%;
	border: 0px;

	input {
		border-radius: 5px;
		width: 90%;
		height: 40px;
		font-size: large;
		text-align: center;
	}
	button {
		width: 50%;
		height: 35px;
		border-radius: 5px;
	}
	form {
		/* background-color: beige; */
		background: linear-gradient(to top, #fbff88, 20%, #13535399);
		/* border:1px solid black; */
		width: 30%;
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: center;
		justify-items: center;
		margin: auto;
		padding: 50px;
	}
	select {
		width: 50%;
		height: 30px;
		font-size: large;
		border-radius: 5px;
	}
`;
