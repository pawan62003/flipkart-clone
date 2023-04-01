//import { background } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
// import { handleCart } from '../redux/ProductReducer/action'
// import { handleCart } from '../Redux/ProductReducer/action'
const ProductCard = ({title,brand,defaultImages,image,price,discount,gender,id}) => {
  
  const prod={title,brand,defaultImages,image,price,discount,gender,id  }

  const dispatch=useDispatch()

  function HandleAddCart(){
   
    // dispatch(handleCart(prod))

  }

  return (
    <DIV>
    <Link to={`/product/${id}`} className='zoomCard'>
    <Maindiv   >
         
      <img style={{width:"100%", height:"350px", marginBottom:"5px"}} 
       src={defaultImages || image} alt={title} />
      <p style={{fontWeight:"5px"}}>{title}</p>
      <p style={{color:"ButtonText",fontSize:"15px", backgroundColor:"ButtonFace" }}>{brand}</p>
      <div style={{ display:"flex", gap:"15px" ,height:"25px",width:"75%", color:"grey"}}>
        <h4 style={{backgroundColor:"green",paddingInline:"5px" ,color:"black"}}>4.5*</h4>(1,15,667)<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="assured" />
      </div>
      <div style={{fontWeight:"bold" ,display:"flex", gap:"10px" ,height:"25px",width:"75%"}} >
            RS.{price} 
            <h3>Rs.{Math.round((price)+((price)*(discount)/100))}</h3> 
            {discount}% off 
       </div>
      <p style={{fontSize:"12px"}}>Free delivery</p>
      <h4 style={{color:"green"}}>Buy 3 itema, gain extra offer</h4>
       
    </Maindiv>

    </Link>
    </DIV>
  )
}

export default ProductCard

const Maindiv = styled.div`
    margin:5px ;
    padding:10px ;
    box-shadow: rgba(0, 0, 0, 0.01) 0px 0px 0px 1px;
       transition:transform .2s;
    `
    const DIV = styled.div`
      .zoomCard :hover{
        transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      }
      `