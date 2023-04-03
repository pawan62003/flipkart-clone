import React from "react";
import {
	Flex,
	Circle,
	Box,
	Image,
	Badge,
	useColorModeValue,
	Icon,
	chakra,
	Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
	isNew: true,
	imageURL:
		"https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70",
	name: "I Phone 14",
	price: 35000,
	rating: 4.2,
	numReviews: 34,
};
const Cards = () => {
	return (
		<Flex p={50} w="100%" alignItems="center" justifyContent="center">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				maxW="sm"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative">
				{data.isNew && (
					<Circle
						size="10px"
						position="absolute"
						top={2}
						right={2}
						bg="red.200"
					/>
				)}
				<br />

				<Image
					w="50%"
					m="auto"
					p="20px"
					src={data.imageURL}
					alt={`Picture of ${data.name}`}
					roundedTop="lg"
				/>

				<Box p="6">
					<Link to='/product'>
					<Box d="flex" alignItems="baseline">
						{data.isNew && (
							<Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
								New
							</Badge>
						)}
					</Box>
					</Link>
					<Flex mt="1" justifyContent="space-between" alignContent="center">
						<Link to={'/product'}>
						<Box
							fontSize="2xl"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated>
							{data.name}
						</Box>
						</Link>
						{/* <Tooltip
							label="Add to cart"
							bg="white"
							placement={"top"}
							color={"gray.800"}
							fontSize={"1.2em"}>
							<chakra.a href={"#"} display={"flex"}>
								<Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
							</chakra.a>
						</Tooltip> */}
					</Flex>

					<Flex justifyContent="space-between" alignContent="center">
						<Link>
						<Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
							<Box as="span" color={"gray.600"} fontSize="lg">
								Rs -
							</Box>
							{data.price.toFixed(2)}
						</Box>
						</Link>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Cards;
