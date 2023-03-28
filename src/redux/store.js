
import {combineReducer,applyMiddleware,legacy_createStore} from 'redux';
import thunk from 'redux-thunk'


const rootReducer = combineReducer({

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))