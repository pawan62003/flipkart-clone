import React from 'react'
import ProductList from '../Components/ProductList'
import SideBarProduct from '../Components/SideBarProduct'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
//import styled from 'styled-components'
import { Box } from '@chakra-ui/react'
import "./productPg.css"
const ProductPage = () => {
  return (
   <div id='main'>
   <div >
     <Navbar/>
     <Box bg='blue.500' w='100%' p={4} color='white'>
           </Box>
   </div >
    <div 
          style={{display: "grid",width:"95%",
                  gridTemplateColumns:"20% 80%",
                  gap:"10px",
                  margin: "auto",marginTop:"20px"}}>
      <div style={{backgroundColor:"white"}}>
        <SideBarProduct/>
      </div>
      <div style={{backgroundColor:"white"}}>
        <p style={{color:"grey",fontSize:"14px",textAlign:"left",margin:"10px"}}>Home--Footwear--Men's Footwear--Sports Shoes</p>
        <p style={{color:"grey",fontSize:"12px",textAlign:"left", margin:"8px"}}>If you are an athlete, sports shoes are a must-have in your collection, which can improve your performance. The right pair of shoes provides comfort and prevents injuries so that you can carry out your exercise without any worry. Lifting heavy weights can put tremendous pressure on your feet, ankles, and legs, which can be minimised by wearing this shoe. These shoes are designed keeping specific exercises or activities in mind. You can find shoes made for running, walking, training, and playing football, cricket, and badminton. Athletic shoes are available in various designs, themes, and colours to match your style and aesthetic. Bring your loved ones a shoe that can absorb shocks while playing on the ground, thus protecting their ankle and feet from unwanted injuries. You can buy men's sports shoes from brands like Earton, Bavis, Sparx, Aircum, Asian, and others available online. People who practise different forms of exercise can opt for a cross-training shoe. After wearing a shoe, tighten the laces to keep your feet secured in the shoe. To add style to your athletic look, try wearing different lace patterns. Runners can opt for cushioned shoes with pads to absorb the shock of the ground.
           Choose sports shoes that match your requirements and get them delivered to your doorstep. Price list last updated on 02-Apr-23.</p>
        <ProductList/>
      </div>
    </div>
    <Footer/>
    </div>
  )


}

export default ProductPage

