import { Box, Spacer,Text,useToast,useColorModeValue,Stack,Image,Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './ordercheck.css';
import {Accordion,Radio,RadioGroup,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Button} from '@chakra-ui/react'
import {Progress,ButtonGroup,Heading,Flex,FormControl,GridItem,FormLabel,Input,Select,SimpleGrid,InputLeftAddon,InputGroup,Textarea,FormHelperText,InputRightElement,} from '@chakra-ui/react';
import React from 'react';
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrementProduct, deleteCart, incrementProduct } from "../redux/cartReducer/action";
import { CheckIcon,Icon } from '@chakra-ui/icons';

const Ordercheck = () => {
 let totalPrice = 0;
   const colorVal = useColorModeValue('white', 'gray.600')
  const cartData = useSelector(store => store.cartReducer);
  const dispatch = useDispatch()

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



   const toast = useToast();
   const [step, setStep] = useState(1);
   const [progress, setProgress] = useState(33.33);
    return <>

     <div id='main-ordercheckout'>
     <Box marginRight={'12%'} bg='blue.500' w='100%' p={1} color='white'>
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
                        marginRight={'12px'}
						color={"black.600"}
						px={{ base: "1px", lg: "3px" }}
						className="flex">
						BUY-KART
					</Text>
					
				</Box>
			</Link>
     </Box>
	 <div id='order'>
        <div id='orderfirst'>
          <Accordion>
           <AccordionItem boxShadow='md' background={'white'} margin={4}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  LOGIN <Icon as={CheckIcon} color={'blue.500'}/>
                  <h1>+91 6200327812</h1>
                </Box>
                <Button colorScheme='blue' variant='outline'>
                    CHANGE
                  </Button>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Box bg='blue.500' w='100%' p={4} color='white'>
           </Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </AccordionPanel>
          </AccordionItem>        
           <AccordionItem boxShadow='md' background={'white'} margin={4}>
               <h2>
               <AccordionButton>
                   <Box as="span" flex='1' textAlign='left' padding={3}>
				     DELIVERY ADDRESS <Icon as={CheckIcon} color={'blue.500'}/>
					 <Text>remnagri,Raja Bazar,Patna,Bihar,800025</Text>
                   </Box>
                  {/* <AccordionIcon /> */}
				     <Button colorScheme='blue' variant='outline'>
                    CHANGE
                  </Button>
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
               <Box bg='blue.500' w='100%' p={4} color='white'>
               </Box>
               
               <>
       <Box
         borderWidth="1px"
         rounded="lg"
         shadow="1px 1px 3px rgba(0,0,0,0.3)"
         maxWidth={800}
         p={6}
         m="10px auto"
         as="form">
         <Progress
           hasStripe
           value={progress}
           mb="5%"
           mx="5%"
           isAnimated></Progress>
         {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
         <ButtonGroup mt="5%" w="100%">
           <Flex w="100%" justifyContent="space-between">
             <Flex>
               <Button
                 onClick={() => {
                   setStep(step - 1);
                   setProgress(progress - 33.33);
                 }}
                 isDisabled={step === 1}
                 colorScheme="blue"
                 variant="solid"
                 w="7rem"
                 mr="5%">
                 Back
               </Button>
               <Button
                 w="7rem"
                 isDisabled={step === 3}
                 onClick={() => {
                   setStep(step + 1);
                   if (step === 3) {
                     setProgress(100);
                   } else {
                     setProgress(progress + 33.33);
                   }
                 }}
                 colorScheme="blue"
                 variant="outline">
                 Next
               </Button>
             </Flex>
             {step === 3 ? (
               <Button
                 w="7rem"
                 colorScheme="red"
                 variant="solid"
                 onClick={() => {
                   toast({
                     title: 'Account created.',
                     description: "We've created your account for you.",
                     status: 'success',
                     duration: 3000,
                     isClosable: true,
                   });
                 }}>
                 Submit
               </Button>
             ) : null}
           </Flex>
         </ButtonGroup>
       </Box>
     </>

              </AccordionPanel>
             </AccordionItem>

		       <AccordionItem boxShadow='md'  background={'white'} margin={4}>
               <h2>
               <AccordionButton>
                   <Box as="span" flex='1' textAlign='left' padding={3}>
                    ORDER SUMMARY  <Icon as={CheckIcon} color={'blue.500'}/>
                    <h1>{cartData.length} item selected</h1>
                   </Box>
                   <Button colorScheme='blue' variant='outline'>
                    CHANGE
                  </Button>
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
               
               <Box bg='blue.500' w='100%' p={4} color='white'>
               </Box>


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
                  paddingLeft={'15px'}
                  paddingRight={'15px'}
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
                disabled={item.qty===1}
                  flex={1}
                  fontSize={'2xl'}
                  padding={'10px'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  paddingLeft={'15px'}
                  paddingRight={'15px'}
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
                  paddingLeft={'15px'}
                  paddingRight={'15px'}
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

              </AccordionPanel>
           </AccordionItem>


              <AccordionItem boxShadow='md'  background={'white'} margin={4}>
              <h2>
              <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    PAYMENT OPTIONS  <Icon as={CheckIcon} color={'blue.500'}/>
                  </Box>
                  <Button colorScheme='blue' variant='outline'>
                    CHANGE
                  </Button>
             </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Box bg='blue.500' w='100%' p={4} color='white'>
               </Box>
              <RadioGroup defaultValue='2'margin={3}>
              <Stack spacing={5}>
                <Radio colorScheme='blue' value='1'>
                  Cash On Delevary
                </Radio>
                <Radio colorScheme='blue' value='2'>
                  UPI
                </Radio>
                <Radio colorScheme='blue' value='3'>
                  Net Banking
                </Radio>
                <Radio colorScheme='blue' value='4'>
                  Debit/Cradit Card
                </Radio>
              </Stack>
            </RadioGroup>   
            <Button marginLeft={"47%"} colorScheme='blue'>Next</Button>         
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
         
        </div>
        <div id='ordersecond'>
        <div style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',backgroundColor:'white',padding:'15px',width:'90%',margin:'auto',marginTop:'30px'}}>
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

        <div style={{boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',backgroundColor:'white',padding:'10px',display:"flex",width:'90%',margin:'auto',marginTop:'20px'}}>
          <img width={'13%'} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/super-coin_bac003.svg" alt="" />
           <h1>safe and secure payments. Easy returns 100% Authentic Products</h1>
        </div>
        <div style={{marginBottom:'12px',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',backgroundColor:'white',padding:'10px',display:"flex",gap:'20px',width:'90%',margin:'auto'}}>
          <img width={'10%'} src="https://img1a.flixcart.com/www/linchpin/fk-cp-pay/axis-78501b36.svg" alt="" />
           <h1>5% cashback on Flipkart Axis Bank Card</h1>
        </div>

        <div style={{marginBottom:'15px',padding:'10px',display:"flex",width:'90%',margin:'auto'}}>
          <img width={'10%'} src="https://www.identrust.com/sites/default/files/inline-images/secure-authentication%20%281%29.png" alt="" />
           <h1>safe and secure payments. Easy returns 100% Authentic Products</h1>
        </div>

        </div>
     </div>
	 </div>
    </>
}

export default Ordercheck;


const Form1 = () => {
   const [show, setShow] = React.useState(false);
   const handleClick = () => setShow(!show);
   return (
     <>
       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
         User Registration
       </Heading>
       <Flex>
         <FormControl mr="5%">
           <FormLabel htmlFor="first-name" fontWeight={'normal'}>
             First name
           </FormLabel>
           <Input id="first-name" placeholder="First name" />
         </FormControl>
 
         <FormControl>
           <FormLabel htmlFor="last-name" fontWeight={'normal'}>
             Last name
           </FormLabel>
           <Input id="last-name" placeholder="First name" />
         </FormControl>
       </Flex>
       <FormControl mt="2%">
         <FormLabel htmlFor="email" fontWeight={'normal'}>
           Email address
         </FormLabel>
         <Input id="email" type="email" />
         <FormHelperText>We'll never share your email.</FormHelperText>
       </FormControl>
 
       <FormControl>
         <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
           Password
         </FormLabel>
         <InputGroup size="md">
           <Input
             pr="4.5rem"
             type={show ? 'text' : 'password'}
             placeholder="Enter password"
           />
           <InputRightElement width="4.5rem">
             <Button h="1.75rem" size="sm" onClick={handleClick}>
               {show ? 'Hide' : 'Show'}
             </Button>
           </InputRightElement>
         </InputGroup>
       </FormControl>
     </>
   );
 };
 const Form2 = () => {
   return (
     <>
       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
         User Details
       </Heading>
       <FormControl as={GridItem} colSpan={[6, 3]}>
         <FormLabel
           htmlFor="country"
           fontSize="sm"
           fontWeight="md"
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}>
           Country / Region
         </FormLabel>
         <Select
           id="country"
           name="country"
           autoComplete="country"
           placeholder="Select option"
           focusBorderColor="brand.400"
           shadow="sm"
           size="sm"
           w="full"
           rounded="md">
           <option>United States</option>
           <option>Canada</option>
           <option>Mexico</option>
         </Select>
       </FormControl>
 
       <FormControl as={GridItem} colSpan={6}>
         <FormLabel
           htmlFor="street_address"
           fontSize="sm"
           fontWeight="md"
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}
           mt="2%">
           Street address
         </FormLabel>
         <Input
           type="text"
           name="street_address"
           id="street_address"
           autoComplete="street-address"
           focusBorderColor="brand.400"
           shadow="sm"
           size="sm"
           w="full"
           rounded="md"
         />
       </FormControl>
 
       <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
         <FormLabel
           htmlFor="city"
           fontSize="sm"
           fontWeight="md"
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}
           mt="2%">
           City
         </FormLabel>
         <Input
           type="text"
           name="city"
           id="city"
           autoComplete="city"
           focusBorderColor="brand.400"
           shadow="sm"
           size="sm"
           w="full"
           rounded="md"
         />
       </FormControl>
 
       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
         <FormLabel
           htmlFor="state"
           fontSize="sm"
           fontWeight="md"
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}
           mt="2%">
           State / Province
         </FormLabel>
         <Input
           type="text"
           name="state"
           id="state"
           autoComplete="state"
           focusBorderColor="brand.400"
           shadow="sm"
           size="sm"
           w="full"
           rounded="md"
         />
       </FormControl>
 
       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
         <FormLabel
           htmlFor="postal_code"
           fontSize="sm"
           fontWeight="md"
           color="gray.700"
           _dark={{
             color: 'gray.50',
           }}
           mt="2%">
           ZIP / Postal
         </FormLabel>
         <Input
           type="text"
           name="postal_code"
           id="postal_code"
           autoComplete="postal-code"
           focusBorderColor="brand.400"
           shadow="sm"
           size="sm"
           w="full"
           rounded="md"
         />
       </FormControl>
     </>
   );
 };
 
 const Form3 = () => {
   return (
     <>
       <Heading w="100%" textAlign={'center'} fontWeight="normal">
         Social Handles
       </Heading>
       <SimpleGrid columns={1} spacing={6}>
         <FormControl as={GridItem} colSpan={[3, 2]}>
           <FormLabel
             fontSize="sm"
             fontWeight="md"
             color="gray.700"
             _dark={{
               color: 'gray.50',
             }}>
             Website
           </FormLabel>
           <InputGroup size="sm">
             <InputLeftAddon
               bg="gray.50"
               _dark={{
                 bg: 'gray.800',
               }}
               color="gray.500"
               rounded="md">
               http://
             </InputLeftAddon>
             <Input
               type="tel"
               placeholder="www.example.com"
               focusBorderColor="brand.400"
               rounded="md"
             />
           </InputGroup>
         </FormControl>
 
         <FormControl id="email" mt={1}>
           <FormLabel
             fontSize="sm"
             fontWeight="md"
             color="gray.700"
             _dark={{
               color: 'gray.50',
             }}>
             About
           </FormLabel>
           <Textarea
             placeholder="you@example.com"
             rows={3}
             shadow="sm"
             focusBorderColor="brand.400"
             fontSize={{
               sm: 'sm',
             }}
           />
           <FormHelperText>
             Brief description for your profile. URLs are hyperlinked.
           </FormHelperText>
         </FormControl>
       </SimpleGrid>
     </>
   );
 };
 

