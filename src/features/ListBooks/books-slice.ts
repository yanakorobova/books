import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BooksListType, SearchRequestDataType} from "common/type/type";
import {setAppStatus} from "app/app-slice";
import {BooksApi} from "common/api/books-api";
import {handleServerNetworkError} from "common/utils/utils";

const initialState: BooksListType[] = []

const booksSlice = createSlice({
    initialState: initialState,
    name: 'books',
    reducers: {
        clearBooks: ()=>{
            return []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadBooks.fulfilled,(state, action)=>{
            return [...state,...action.payload]
        })
    }
})
export const booksReducer = booksSlice.reducer
export const {clearBooks} = booksSlice.actions

export const loadBooks = createAsyncThunk('books/loadBooks',
    async (data: SearchRequestDataType, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const {query, orderBy, startIndex, maxResults} = data
            const res = await BooksApi.loadBooks({query, maxResults, startIndex, orderBy})
            dispatch(setAppStatus({status: 'succeeded'}))
            return res.data.items
        } catch (error) {
            //@ts-ignore
            handleServerNetworkError(error, dispatch)
            return rejectWithValue({})
        }
    })

