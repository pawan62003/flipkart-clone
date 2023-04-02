import { Box, Flex, Image, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProductData } from '../redux/ProductReducer/action'

const ProductDetail = () => {
  const {id}=useParams();
  const[data,setData]=useState("")
  const {products}=useSelector((store)=>{
    //console.log(store.productReducer.products);
    return store.productReducer})
    
   console.log(products);
   useEffect(()=>{
     const data=products.find((el)=>el.id===+id)
     console.log(data)
     setData(data)
     console.log(id)
   },[])
  return (
    <div style={{
      display:"grid",gridTemplateColumns:"35% 65%"
    }}>
      <Flex>
        <VStack>
           <Box>
            <Image src='' alt=''/>
           </Box>
            <Box>
              <Image  src='' alt=''/>
            </Box>
            <Box>
               <Image src='' alt=''/>
            </Box>
            <Box>
              <Image src='' alt=''/>
            </Box>
            <Box></Box>
        </VStack>
        <Stack>
            <Box>
              <Image src='' alt=''/>
            </Box>
        </Stack>
      </Flex>
    </div>
  )
}

export default ProductDetail


