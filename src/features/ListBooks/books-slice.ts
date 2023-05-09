import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ResponseBooksData, SearchRequestDataType} from "common/type/type";
import {setAppStatus} from "app/app-slice";
import {BooksApi} from "common/api/books-api";
import {handleServerNetworkError} from "common/utils/utils";
import {RootState} from "app/store";
import {MAX_RES_FIRST} from "common/constants/constants";

const initialState: ResponseBooksData = {
    books: [],
    totalItems: 0,
    addMore: false
}

const booksSlice = createSlice({
    initialState: initialState,
    name: 'books',
    reducers: {
        clearBooks: (state) => {
            state.books = []
        },
        changeAddMore: (state,action:PayloadAction<{addMore:boolean}>)=>{
            state.addMore = action.payload.addMore
        },
        changeTotalItems: (state,action)=>{
            state.totalItems = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadBooks.fulfilled, (state, action) => {
           state.books = [...state.books, ...action.payload]
        })
    }
})
export const booksReducer = booksSlice.reducer
export const {clearBooks,changeAddMore,changeTotalItems} = booksSlice.actions

export const loadBooks = createAsyncThunk('books/loadBooks',
    async (data: SearchRequestDataType, {dispatch, rejectWithValue,getState}) => {
        const {books} = getState() as RootState
        !books.addMore &&  dispatch(setAppStatus({status: 'loading'}))
        try {
            const {query, orderBy, startIndex, maxResults,category,inauthor} = data
            const res = await BooksApi.loadBooks({query, maxResults, startIndex, orderBy, category,inauthor})
            dispatch(setAppStatus({status: 'succeeded'}))
            if(maxResults===MAX_RES_FIRST){
                dispatch(changeTotalItems(res.data.totalItems))
            }
            return res.data.items
        } catch (error) {
            //@ts-ignore
            handleServerNetworkError(error, dispatch)
            return rejectWithValue({})
        }
    })

