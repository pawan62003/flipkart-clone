import { DECREMENT_PRODUCT, DELETE_TO_CART, INCREMENT_PRODUCT ,GET_ADMIN_PRODUCT,CONFORM_ORDER, ADD_TO_CART} from "./actionType";

const initalCart = {
    cartData:[],
    cartHistory:[],
    AdminProduct:[],
};

export const reducer = (state=initalCart,{type,payload}) => {

  switch(type){
    case DELETE_TO_CART:{
        const updatedData = state.cartData.filter(item => item.id!==payload);
        return {...state,cartData:updatedData};
    }
    case INCREMENT_PRODUCT:{
        const incProduct = state.cartData.map(item => item.id===payload? {...item,qty:item.qty+1}:item)
        return {...state,cartData:incProduct};
    }
    case DECREMENT_PRODUCT:{
        const decProduct = state.cartData.map(item => item.id===payload? {...item,qty:item.qty-1}:item)
        return {...state,cartData:decProduct};
    }
    case ADD_TO_CART:{
      console.log(payload)
       return {...state,cartData:[...state.cartData,payload]}
    }
    case CONFORM_ORDER:{
        return {...state,cartData:[],cartHistory:[...state.cartData,...state.cartHistory]}
    }
case GET_ADMIN_PRODUCT:{
return {
  ...state,
    AdminProduct:payload
}
}
    default:{
        return state;
    }
  }
}