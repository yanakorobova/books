import axios from "axios";
import {DataBookType, SearchRequestDataType} from "common/type/type";

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    withCredentials: false
})

export const BooksApi = {
    loadBooks(data: SearchRequestDataType) {
        const {query, orderBy, startIndex, maxResults} = data
        return instance.get(`?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`)
    },
    getBook(data: DataBookType) {
        return instance.get(`/${data}`)
    }
}