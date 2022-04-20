import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import {persistStore } from 'redux-persist';

/*
Необходимо добавить данную функцию thunk, так как она позволяет обрабатывать ассинхронные
запросы см. документацию по Redux thunk 
*/
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'



const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer, composedEnhancer);

export const persistor = persistStore(store);


