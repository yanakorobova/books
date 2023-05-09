import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderByType, SettingsType} from "common/type/type";

const initialState: SettingsType = {
    orderBy: 'Relevance',
    query: 'Node',
    category: 'All',
    inauthor: ''
}

const filtersSlice = createSlice({
    initialState: initialState,
    name: 'filters',
    reducers: {
        changeQuery: (state, action: PayloadAction<{ query: string }>) => {
            state.query = action.payload.query
            state.inauthor = ''
        },
        changeOrderBy: (state, action: PayloadAction<{ orderBy: OrderByType }>) => {
            state.orderBy = action.payload.orderBy
        },
        changeCategory: (state, action: PayloadAction<{ category: string }>) => {
            state.category = action.payload.category
            state.inauthor = ''
            state.query = ''
        },
        changeInauthor: (state, action: PayloadAction<{ inauthor: string }>) => {
            state.inauthor = action.payload.inauthor
            state.query = ''
        },
    },
})
export const filtersReducer = filtersSlice.reducer
export const {changeQuery, changeOrderBy, changeCategory,changeInauthor} = filtersSlice.actions
