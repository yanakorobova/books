import axios from "axios";
import {DataBookType, SearchRequestDataType} from "common/type/type";

export const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    withCredentials: false
})

export const BooksApi = {
    loadBooks(data: SearchRequestDataType) {
        const {query, orderBy, startIndex, maxResults, category, inauthor} = data
        if (category === 'All' && !inauthor) {
            return instance.get(`?q="${query ===''? 'a': query}"&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`)
        }
        if (inauthor) {
            return instance.get(`?q=inauthor:"${inauthor}"&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`)
        }
        return instance.get(`?q=subject:"${category}"&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${orderBy}`)
    },
    getBook(data: DataBookType) {
        return instance.get(`/${data.volumeId}`)
    }
}