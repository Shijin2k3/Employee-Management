import {combineReducers, configureStore} from '@reduxjs/toolkit';
import  {thunk}  from "redux-thunk";

//can create multiple state
const reducer = combineReducers({

})


//create store
const store= configureStore({
    reducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use default middleware and add thunk -perform asynchronous actions
})

export default store;