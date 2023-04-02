import Navbar from "../Components/Navbar";
import {Box,Card,useToast,Button,CardFooter,Text,Image,Stack,CardBody,Heading}  from '@chakra-ui/react'
import {useSelector,useDispatch } from 'react-redux';
import {addToCart} from "../redux/cartReducer/action"
const OrderHistory = () => {
    const cartHistory = useSelector(store => store.cartReducer.cartHistory);
    const dispatch = useDispatch();
    const toast = useToast();

    const handleCart = (item) => {
       dispatch(addToCart(item))
       toast({
        title: 'Item Added in Cart.',
        description: "We've Added this item in Cart.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    
    return <>
      <Navbar />
      <Box m={'9px'} marginRight={'12%'} fontSize={20} bg='blue.500' w='100%' p={1} color='white'>
        Here You Can Find Your Product Order History
     </Box>
     {
        cartHistory.map(item =>
            <div style={{width:'70%',margin:'auto',}}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          border='1px'
          borderColor='gray.200'
          backgroundColor={'grey.500'}
          m={3}
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '300px' }}
            src={item.poster||item.image.image1}
            alt='Caffe Latte'
            // maxH={{ base: '100%', sm: '200px' }}
            height={'300px'}
            width={'300px'}
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{item.title}</Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              categories:{item.categories}
              </Text>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              price:{+item.price*item.qty}
              </Text>

              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {item.description||item.description}
              </Text>

              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button onClick={()=>handleCart(item)} variant='solid' colorScheme='blue'>
                Buy Again
              </Button>
            </CardFooter>
          </Stack>
        </Card>        
     </div>
     )
     }
    </>
}

export default OrderHistory;