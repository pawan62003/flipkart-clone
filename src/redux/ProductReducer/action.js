import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
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