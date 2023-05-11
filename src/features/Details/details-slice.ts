import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BookInfoType, DataBookType, VolumeInfoType} from "common/type/type";
import {setAppStatus} from "app/app-slice";
import {BooksApi} from "common/api/books-api";
import {handleServerNetworkError} from "common/utils/utils";
import {changeIsShow} from "features/Header/FiltersPanel/filters-slice";


const initialState: BookInfoType = {
    id: '',
    volumeInfo: {} as VolumeInfoType
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadBook.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const detailsReducer = detailsSlice.reducer

export const loadBook = createAsyncThunk('/details/loadBook',
    async (data: DataBookType, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        dispatch(changeIsShow({isShow: false}))
        try {
            const {volumeId} = data
            const res = await BooksApi.getBook({volumeId})
            dispatch(setAppStatus({status: 'succeeded'}))
            return res.data
        } catch (error) {
            //@ts-ignore
            handleServerNetworkError(error, dispatch)
            return rejectWithValue({})
        }
    })
