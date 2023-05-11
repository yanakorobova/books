export type DataBookType = {
    volumeId: string | undefined
}
export type SearchRequestDataType = {
    inauthor?: string
    query?: string
    maxResults: number
    startIndex: number
    orderBy: string
    category?: string
}
export type VolumeInfoType = {
    title: string
    authors: string[]
    categories: string[]
    imageLinks: {
        thumbnail: string
        small: string
    }
    averageRating: number
    description: string
    printedPageCount: number
    publishedDate: string
    previewLink: string
    publisher: string
    language: string
}
export type BooksListType = {
    id: string
    etag: string
    volumeInfo: VolumeInfoType
}
export type ResponseBooksData = {
    totalItems: number
    books: BooksListType[]
    addMore: boolean
}
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type OrderByType = 'Relevance' | 'Newest'

export type SettingsType = {
    orderBy: OrderByType
    query: string
    category: string
    inauthor: string
    isShow: boolean
}
export type BookInfoType = {
    id: string
    volumeInfo: VolumeInfoType
}
