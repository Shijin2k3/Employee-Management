import {combineReducers, configureStore} from '@reduxjs/toolkit';
import  {thunk}  from "redux-thunk";
import employeesReducer from './slices/employeesSlice'
import authReducer from'./slices/authSlice';

//can create multiple state
const reducer = combineReducers({
   employeesState:employeesReducer,
   authState:authReducer
})


//create store
const store= configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use default middleware and add thunk -perform asynchronous actions
})

export default store;