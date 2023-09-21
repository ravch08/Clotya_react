import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const reducer = combineReducers({
	cartState: cartReducer,
});

const store = configureStore({
	reducer: reducer,
});

export default store;
