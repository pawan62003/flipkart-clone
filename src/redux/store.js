
import {combineReducers,applyMiddleware,legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import {reducer as authReducer} from './AuthReducer/reducer'
import {reducer as productReducer} from './ProductReducer/reducer';
import { reducer as cartReducer  } from './cartReducer/reducer';

const rootReducer = combineReducers({
authReducer,
productReducer,
cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))