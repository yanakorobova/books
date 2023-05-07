import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    initialState: [],
    name: 'books',
    reducers: {}
})
export const filterReducer = filterSlice.reducer