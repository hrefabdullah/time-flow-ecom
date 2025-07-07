import { createSlice } from "@reduxjs/toolkit";

const isDarkMode = localStorage.getItem('darkmode')
const initialState = isDarkMode === 'true'

const DarkModeSlice = createSlice({
    name: 'darkMode',
    initialState: initialState,
    reducers: {
        toggleDarkMode: (state) => {
            const newState = !state
            localStorage.setItem('darkmode', newState)
            return newState
        }
    }
})

export const { toggleDarkMode } = DarkModeSlice.actions
export default DarkModeSlice.reducer