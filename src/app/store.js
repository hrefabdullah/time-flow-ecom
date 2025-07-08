import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/theme/darkMode.js";
import sidebarReducer from "../features/sidebar/sidebar.js"
import cartReducer from "../features/cart/cart.js"
import userCartReducer from '../features/cart/userCart.js'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        sidebar: sidebarReducer,
        cart: cartReducer,
        userCart: userCartReducer
    }
});