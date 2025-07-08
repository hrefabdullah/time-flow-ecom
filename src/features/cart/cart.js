import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: false,
    reducers: {
        toggleCart: (state) => !state
    }
})

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer