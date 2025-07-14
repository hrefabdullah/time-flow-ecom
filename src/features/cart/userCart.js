import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/products";

const userCartSlice = createSlice({
    name: 'userCart',
    initialState: [],
    reducers: {
        addItemCart: (state, action) => {
            state.push(action.payload)
        },
        removeItemCart: (state, action) => {
            const idx = action.payload
            state.splice(idx, 1)
        },
        empty: (state) => {
            state.length = 0
        }
    }
})

export const { addItemCart, removeItemCart, empty } = userCartSlice.actions
export default userCartSlice.reducer