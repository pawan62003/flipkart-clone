import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const images = [
	"https://rukminim1.flixcart.com/flap/1000/1000/image/bf9c7eb4dfe3e778.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/02f31191fe477de3.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/5d7822bf05bdce34.jpg?q=50",
];

function ImageGrid() {
	const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
	return (
		<Grid templateColumns="repeat(3, 1fr)" gap={4} w="90%" m="auto">
			{images.map((image, index) => (
				<GridItem key={index}>
					<Image src={image} alt={`Image ${index + 1}`} />
				</GridItem>
			))}
		</Grid>
	);
}

export default ImageGrid;
