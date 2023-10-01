import { combineReducers } from "redux";
import productsReducers from "./products/productsReducers";
import cartReducers from "./carts/cartsReducers";
import authReducer from "./auth/authReducers";



export const rootReducers = combineReducers({
    products:productsReducers,
    cart:cartReducers,
    auth:authReducer,
})