import React from "react";
import Navbar from "../Components/Navbar";
import {Badge,Button,Center,Flex,Heading,Image,Link,Stack,Text,useColorModeValue,} from '@chakra-ui/react';
import './cart.css'
import { useDispatch, useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { decrementProduct, deleteCart, incrementProduct } from "../redux/cartReducer/action";

const Cart = () => {
  let totalPrice = 0;
  const colorVal = useColorModeValue('white', 'gray.600')
  const cartData = useSelector(store => store.cartReducer);
  const dispatch = useDispatch()
  const toast = useToast();
  const navigate = useNavigate();

  const handleCartDelete = (id) => {
    dispatch(deleteCart(id))
    toast({
      title: 'Item Deleted.',
      description: "We've delete this item.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const handlePlaceOrder = () => {
     navigate('/ordercheck')
  }

  const handleCartQty = (id) => {
    dispatch(incrementProduct(id));
  }
  const handleCartqtyInc = (id) => {
    dispatch(decrementProduct(id))
  }

  for(let i=0;i<cartData.length;i++){
    totalPrice+=(+cartData[i].price)*(cartData[i].qty)
    // console.log(+cartData[i].price,)
  }

	return (
		<div>
			<Navbar />

			<div id="cartpage">
      <div id='container'>
      <div id='firstcontainer'>

      {
        cartData.map(item => 
          
          <Center key={item.id} py={6}>
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: 'auto' }}
            height={{ sm: 'auto', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={colorVal}
            // boxShadow={'2xl'}
            padding={4}>
            <Flex maxWidth={'300px'} flex={1} bg="blue.200">
              <Image
              w={'250px'}
              height={"250px"}
                objectFit="cover"
                boxSize="100%"
                // maxWidth={'250px'}
                src={
                  item.poster||item.image.image1
                }
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                {item.title}
              </Heading>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              categories:{item.categories}
              </Text>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              price:{+item.price*item.qty}
              </Text>

              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {item.description||item.description}
              </Text>
             
              <Stack
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'space-between'}
                alignItems={'center'}>
  
                  {/* increase or decrease button addad here */}
                <Stack 
                display={'flex'}
                direction={'row'}>
                <Button
                onClick={()=>handleCartQty(item.id)}
                  flex={1}
                  fontSize={'2xl'}
                  padding={'10px'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  paddingLeft={'20px'}
                  paddingRight={'20px'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  +
                </Button>
                <Button>
                  {item.qty}
                </Button>
                <Button
                onClick={()=>handleCartqtyInc(item.id)}
                  flex={1}
                  fontSize={'2xl'}
                  padding={'10px'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  paddingLeft={'23px'}
                  paddingRight={'23px'}
                  isDisabled={item.qty===1}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}>
                  -
                </Button>
                </Stack>
                <Button
                onClick={()=>handleCartDelete(item.id)}
                  flex={0.5}
                  padding={'4px'}
                  fontSize={'m'}
                  rounded={'full'}
                  bg={'red.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'red.500',
                  }}
                  _focus={{
                    bg: 'red.500',
                  }}>
                  Delete
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Center>
          )
      }
      
     <div style={{width:'87%',margin:'auto',marginBottom:'10px',boxShadow:'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}}>
     <Button
                onClick={handlePlaceOrder}
                flex={1}
                fontSize={'30px'}
                // rounded={'full'}
                margin={'18px'}
                paddingLeft={'12px'}
                paddingRight={'12px'}
                marginLeft={'40%'}
                bg={'orange.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'orange.500',
                }}
                _focus={{
                  bg: 'orange.500',
                }}>
                Place Order
              </Button>
     </div>
      </div>
      <div id='secondcontainer'>
        <div style={{border:'1px solid #BFBFBF',backgroundColor:'white',padding:'15px',width:'90%',margin:'auto',marginTop:'30px'}}>
         <h1 style={{fontSize:'30px'}}>PRICE DETAILS</h1><hr/>
         <div style={{display:'flex',justifyContent:"space-between",fontSize:'25px',gap:'40px'}}>
            <h1>Total price</h1>
            <h1>{totalPrice}</h1>
         </div><br/>
         <div style={{display:'flex',justifyContent:'space-between',fontSize:'25px',gap:'40px'}}>
            <h1>Discount</h1>
            <h1>-2345</h1>
         </div><br/>
         <div style={{display:'flex',justifyContent:'space-between',fontSize:'25px',gap:'40px'}}>
            <h1>Delivery Charges</h1>
            <h1>Free</h1>
         </div><hr/><br/>
         <div style={{display:'flex',justifyContent:'space-between',fontSize:'30px',gap:'40px'}}>
            <h1>Total Amount</h1>
            <h1>{totalPrice}</h1>
         </div><hr/>
         <h1 style={{padding:'5px',color:'green'}}>You will save 6382 on this order</h1>
        </div>

        <div style={{padding:'10px',display:"flex",width:'90%',margin:'auto',marginTop:'20px'}}>
          <img width={'10%'} src="https://www.identrust.com/sites/default/files/inline-images/secure-authentication%20%281%29.png" alt="" />
           <h1>safe and secure payments. Easy returns 100% Authentic Products</h1>
        </div>
       
      </div>
  </div>
      </div>
		</div>
	);
};

export default Cart;
