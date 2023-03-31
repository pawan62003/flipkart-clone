import { ADD_TO_CART, DECREMENT_PRODUCT, DELETE_TO_CART, INCREMENT_PRODUCT,  } from "./actionType"

export const addToCart = (payload) => {
   return {type:ADD_TO_CART,payload}
}

export const deleteCart = (payload) => {
    return {type:DELETE_TO_CART,payload}
}

export const incrementProduct = (payload) => {
   return {type:INCREMENT_PRODUCT,payload}
}

export const decrementProduct = (payload) => {
    return {type:DECREMENT_PRODUCT,payload}
}