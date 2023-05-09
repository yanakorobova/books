import {AppRootStateType} from "app/store";

export const selectBooks = (state: AppRootStateType) => state.books.books
export const selectTotalItems = (state: AppRootStateType) => state.books.totalItems
export const selectAddMore = (state: AppRootStateType) => state.books.addMore
export const selectQuery = (state: AppRootStateType) => state.settings.query
export const selectOrderBy = (state: AppRootStateType) => state.settings.orderBy
export const selectCategory = (state: AppRootStateType) => state.settings.category
export const selectInauthor = (state: AppRootStateType) => state.settings.inauthor
export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectError = (state: AppRootStateType) => state.app.error