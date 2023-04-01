import { ADD_PRODUCT_SUCCESS, CART, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"
export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    try {
    fetch('https://weak-pink-rabbit-gear.cyclic.app/Products', {
    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify(data) 
  })
  dispatch({type:ADD_PRODUCT_SUCCESS})
    } catch (error) {
        dispatch({type:PRODUCT_FAILURE})
    }
 
}


export const getProductData=(dispatch)=>{
  // console.log("running")
 dispatch({type:PRODUCT_REQUEST})

 axios.get("https://weak-pink-rabbit-gear.cyclic.app/Products")
 .then((res)=>{
  // console.log(res.data)
   dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
 }).catch((err)=>{
   dispatch({type:PRODUCT_FAILURE})
 })
} 

// ${parm.mens-jeans&&parm.mens-tshirt }

export function handleCart(payload){
 console.log(payload)
 return {type:CART,payload}
}