import { configureStore } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
   key: 'root',
   version: 1,
   storage: sessionStorage,
}

const reducer = combineReducers({
   cartState: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
   reducer: persistedReducer,
})

export default store; 