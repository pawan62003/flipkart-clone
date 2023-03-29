
import {combineReducer,applyMiddleware,legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import {authReducer as reducer} from './AuthReducer/reducer'
import {productReducer as reducer} from './ProductReducer/reducer'

const rootReducer = combineReducer({

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))