import {
	Box,
	Text,
	Center,
	HStack,
	Button,
	Divider,
	Stack,
} from "@chakra-ui/react";
import {
	Link,
	DrawerHeader,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Drawer,
} from "@chakra-ui/react";
// import { InputGroup, InputRightElement, CloseButton } from "@chakra-ui/react";
import { Flex, Input, Spacer, Image } from "@chakra-ui/react";
import { BsSearch, BsMailbox2 } from "react-icons/bs";

import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import "./navbar.css";

function Navbar() {
	return (
		<Flex
			p="3"
			alignItems="center"
			pos="sticky"
			top="0"
			left="0"
			style={{ backdropFilter: "blur(13px)" }}
			bg="whiteAlpha.800"
			zIndex="999">
			<Spacer />
			<Link href="/">
				<Box
					fontSize={["1.3em", "1.3em", "1.8em", "1.8em"]}
					fontWeight={"900"}
					h="20%"
					className="flex logoText"
					pt={{ base: "1", lg: "2" }}>
					<Spacer />
					<Text
						as="span"
						color={"black.600"}
						px={{ base: "1px", lg: "3px" }}
						className="flex">
						BUY-
					</Text>
					<Text as="span" className="flex" color={"blue.500"}>
						KART
					</Text>
				</Box>
			</Link>
			<Spacer />
			<Input
				borderRadius="10px"
				type="text"
				width={600}
				placeholder="Search"
				ml="2"
				size="sm"
				bg="white.20"
			/>

			<Spacer />

			<Spacer />
			<Link
				fontSize="1.6em"
				href="/cart
			">
				<FaShoppingBag />
			</Link>
			<Spacer />
			<Link fontSize="1.6em" href="/login">
				<FaUserAlt />
			</Link>
			<Spacer />
			<Link fontSize="1.6em" href="/Products">
				<BsMailbox2 />
			</Link>

			<Spacer />
		</Flex>
	);
}

export default Navbar;
