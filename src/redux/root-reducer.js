// В этом файле сводятся все функции redux

import { combineReducers } from "redux";
import {
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer,
    userUpdateProfileReducer} from "./user/user.reducer";
import bagReducer from "./bag/bag.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./products/products.ruducer";
import { createOrderReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./orders/orders.reducers";

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    bag: bagReducer,
    productList: productReducer,
    userRegister : userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    currentOrder: createOrderReducer,
    orderListMy: orderListMyReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
})



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['bag', 'userLogin']
    
}


export default persistReducer(persistConfig, rootReducer)