import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "app/app-slice";
import {booksReducer} from "features/ListBooks/books-slice";
import {filtersReducer} from "features/Header/FiltersPanel/filters-slice";
import {detailsReducer} from "features/Details/details-slice";

const rootReducer = combineReducers({
    app: appReducer,
    books: booksReducer,
    settings: filtersReducer,
    details: detailsReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

//@ts-ignore
window.store = store