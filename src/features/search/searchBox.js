import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchBox',
    initialState: false,
    reducers: {
        toggleSearchBox: (state) => !state
    }
})

export const { toggleSearchBox } = searchSlice.actions
export default searchSlice.reducer