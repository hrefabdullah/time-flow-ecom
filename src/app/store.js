import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/theme/darkMode.js";
import sidebarReducer from "../features/sidebar/sidebar.js"
import cartReducer from "../features/cart/cart.js"
import userCartReducer from '../features/cart/userCart.js'
import searchBoxReducer from '../features/search/searchBox.js'
import searchInputReducer from '../features/search/searchInput.js'
import filterReducer from '../features/search/filterSearch.js'

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        sidebar: sidebarReducer,
        cart: cartReducer,
        userCart: userCartReducer,
        searchBox: searchBoxReducer,
        searchInput: searchInputReducer,
        filter: filterReducer
    }
});