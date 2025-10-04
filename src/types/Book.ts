export interface Book {
    id: string
    volumeInfo: {
        title: string
        authors: string[]
        description: string
        pageCount: number
        publishedDate: string
        publisher: string
        imageLinks: {
            thumbnail: string
        }
    }
}
