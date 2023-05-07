import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StatusType} from "common/type/type";

const initialState = {
    status: 'idle' as StatusType,
    error: null as null | string
}
const appSlice = createSlice({
    initialState: initialState,
    name: 'app',
    reducers: {
        setAppStatus: (state, action: PayloadAction<{ status: StatusType }>) => {
            state.status = action.payload.status
        },
        setAppError: (state, action: PayloadAction<{ error: null | string }>) => {
            state.error = action.payload.error
        }
    },
})
export const appReducer = appSlice.reducer
export const {setAppStatus, setAppError} = appSlice.actions