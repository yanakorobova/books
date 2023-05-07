export type DataBookType = {
    volumeId: string
}
export type SearchRequestDataType = {
    query: string
    maxResults: number
    startIndex: number
    orderBy: string
}
export type VolumeInfoType = {
    title: string
    authors: string[]
    categories: string[]
    imageLinks: {
        thumbnail : string
    }
}
export type BooksListType = {
    id: string
    volumeInfo: VolumeInfoType
}
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type orderByType = 'relevance' | 'newest'
export type SettingsType = {
    orderBy: orderByType
    query: string
    category: string
}