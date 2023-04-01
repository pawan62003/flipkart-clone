import { ADD_PRODUCT_SUCCESS, CART, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './actionTypes'

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    cart:[]
}
export const reducer = (state=initialState,{type,payload}) => {
  switch (type) {
    case PRODUCT_REQUEST:
       return {...state,isLoading:true}
    case GET_PRODUCT_SUCCESS:
        return {...state,isLoading:false,products:payload}
        case ADD_PRODUCT_SUCCESS:
            return {
                isLoading:false,
                isError:false,
                products:payload
            }
    case PRODUCT_FAILURE:
        return {...state,isLoading:false,isError:true} 

        case CART:
            return {...state,cart:[...state.cart,payload]}   
            case PATCH_PRODUCT_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                }

    default:
        return state;
  }
}
