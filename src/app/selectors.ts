import {AppRootStateType} from "app/store";

export const selectBooks= (state: AppRootStateType) => state.books
export const selectQuery= (state: AppRootStateType) => state.settings.query
export const selectOrderBy= (state: AppRootStateType) => state.settings.orderBy
export const selectCategory= (state: AppRootStateType) => state.settings.category