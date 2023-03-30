import React from "react";
import Navbar from "../Components/Navbar";
import {Badge,Button,Center,Flex,Heading,Image,Link,Stack,Text,useColorModeValue,} from '@chakra-ui/react';
import './cart.css'

const Cart = () => {
	return (
		<div>
			<Navbar />

			<div id='container'>
      <div id='firstcontainer'>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: 'auto' }}
          height={{ sm: 'auto', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.600')}
          // boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
            w={'auto'}
            height={"250px"}
              objectFit="cover"
              boxSize="100%"
              src={
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6712234/2019/3/27/c914a7ac-d808-4ccc-95e6-a73a2bf351831553680490375-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-557155368-1.jpg'
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
              Lindsey James
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @lindsey_jam3s
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Actress, musician, songwriter and artist. PM for work inquires or
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge>
            </Stack>
  
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
                5
              </Button>
              <Button
                flex={1}
                fontSize={'2xl'}
                padding={'10px'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                paddingLeft={'23px'}
                paddingRight={'23px'}
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
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: 'auto' }}
          height={{ sm: 'auto', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.600')}
          // boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
            w={'auto'}
            height={"250px"}
              objectFit="cover"
              boxSize="100%"
              src={
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6712234/2019/3/27/c914a7ac-d808-4ccc-95e6-a73a2bf351831553680490375-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-557155368-1.jpg'
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
              Lindsey James
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @lindsey_jam3s
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Actress, musician, songwriter and artist. PM for work inquires or
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge>
            </Stack>
  
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
                5
              </Button>
              <Button
                flex={1}
                fontSize={'2xl'}
                padding={'10px'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                paddingLeft={'23px'}
                paddingRight={'23px'}
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
      
     <div style={{width:'87%',margin:'auto',marginBottom:'10px',boxShadow:'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}}>
     <Button
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
        <div style={{border:'1px solid #BFBFBF',padding:'10px',width:'90%',margin:'auto',marginTop:'30px'}}>
         <h1 style={{fontSize:'30px'}}>PRICE DETAILS</h1><hr/>
         <div style={{display:'flex',justifyContent:"space-between",fontSize:'25px',gap:'40px'}}>
            <h1>Total price</h1>
            <h1>2345</h1>
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
            <h1>34567</h1>
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
	);
};

export default Cart;
