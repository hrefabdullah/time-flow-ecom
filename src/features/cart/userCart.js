import { createSlice } from "@reduxjs/toolkit";

const userCartSlice = createSlice({
    name: 'userCart',
    initialState: [
        {
            name: 'Metal Neo',
            brand: 'Titan',
            type: 'Analog',
            color: 'Silver',
            price: 3136,
            ratings: 4,
            img1: 'https://m.media-amazon.com/images/I/71bv+Dgr1mL._SX522_.jpg',
            img2: 'https://m.media-amazon.com/images/I/61yaz2lOBpL._SX522_.jpg',
            img3: 'https://m.media-amazon.com/images/I/71DZNANVqQL._SX522_.jpg'
        },
    ],
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