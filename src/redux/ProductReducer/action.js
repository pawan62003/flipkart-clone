import { ADD_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"
export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
  axios.post('https://weak-pink-rabbit-gear.cyclic.app/Products',data).then(()=>{
    dispatch({type:ADD_PRODUCT_SUCCESS})
  }).catch(()=>{
    dispatch({type:PRODUCT_FAILURE})
  })
}
export const editData=(dataObj,id)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  return axios.patch(`https://weak-pink-rabbit-gear.cyclic.app/Products${id}`,dataObj).then(()=>{
      dispatch({type:PATCH_PRODUCT_SUCCESS})
  }).catch(()=>{
      dispatch({type:PRODUCT_FAILURE})
  })
  }