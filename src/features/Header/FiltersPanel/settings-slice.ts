import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {orderByType, SettingsType} from "common/type/type";

const initialState: SettingsType = {
    orderBy: 'relevance',
    query: 'Ruskin Bond',
    category: 'all',
}

const settingsSlice = createSlice({
    initialState: initialState,
    name: 'settings',
    reducers: {
        changeQuery: (state, action: PayloadAction<{ query: string }>) => {
            state.query = action.payload.query
        },
        changeOrderBy: (state, action: PayloadAction<{ orderBy: orderByType }>) => {
            state.orderBy = action.payload.orderBy
        },
        changeCategory: (state, action: PayloadAction<{ category: string }>) => {
            state.category = action.payload.category
        }
    },
})
export const settingsReducer = settingsSlice.reducer
export const {changeQuery, changeOrderBy, changeCategory} = settingsSlice.actions