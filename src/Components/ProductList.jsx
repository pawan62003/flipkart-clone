import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../redux/ProductReducer/action'
//import styled from 'styled-components'
//import SideBarProduct from './SideBarProduct'
import ProductCard from "./ProductCard"
import ProductPage from '../Pages/ProductPage'

const ProductList = () => {
  const dispatch =useDispatch()
  const {products}=useSelector((store)=>{
   //console.log(store.productReducer)
    return store.productReducer
  })
 console.log(products)
  
  useEffect(()=>{
    dispatch(getProductData)
  },[])
  return (
    <div style={{justifyContent:"right"}}>
            <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          margin:"auto",marginTop:"25px"
        }} >
          
            {products.length>0 && products.map((item)=>{
              return <ProductCard key={item.id} {...item} 
              />
            })}
            
        </div>
    </div>
  )
}

export default ProductList
