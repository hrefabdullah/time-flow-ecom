import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState: '',
    reducers: {
        addItem: (state, actions) => {
            return actions.payload ?? state
        }
    }
})

export const { addItem } = searchInputSlice.actions
export default searchInputSlice.reducer