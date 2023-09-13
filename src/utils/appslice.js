import { createSlice } from "@reduxjs/toolkit";



const appslice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen:true
    },
    reducers: {
        toggglemenu: (state) => {
          state.isMenuOpen = !state.isMenuOpen;
        }
    }
})
export const { toggglemenu } = appslice.actions;
export default appslice.reducer;


