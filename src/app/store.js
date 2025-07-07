import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/theme/darkMode.js";
import sidebarReducer from "../features/sidebar/sidebar.js"

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        sidebar: sidebarReducer
    }
});