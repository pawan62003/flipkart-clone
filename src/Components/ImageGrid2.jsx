import { Grid, GridItem, Image } from "@chakra-ui/react";

const images = [
	"https://rukminim1.flixcart.com/flap/1000/1000/image/fda0d9fac84f44b2.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/f54b25685a57e491.jpg?q=50",
	"https://rukminim1.flixcart.com/flap/1000/1000/image/4a362bb3cdbee37d.jpeg?q=50",
];

function ImageGrid2() {
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

export default ImageGrid2;
