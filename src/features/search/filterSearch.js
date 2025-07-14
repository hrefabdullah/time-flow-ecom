import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        updateType: (state, actions) => {
            state = actions.payload
        }
    }
})

export const { updateType } = filterSlice.actions
export default filterSlice.reducer