import { createSlice } from "@reduxjs/toolkit";

const userQtySlice = createSlice({
    name: 'quantity',
    initialState: {},
    reducers: {
        addQuantity: (state, actions) => {
            actions.payload.forEach(item => {
                if (state[item.id]) {
                    state[item.id].quantity += 1;
                } else {
                    state[item.id] = { ...item, quantity: 1 };
                }
            });
        }
    }
})

export const { addQuantity } = userQtySlice.actions
export default userQtySlice.reducer