import { createContext } from 'react'
import { Book } from '@/types/Book'
import { NotificationData } from '@/types/NotificationData'

interface BooksContextType {
    results: Book[]
    selectedBook?: Book
    myShelf: Book[]
    loading: boolean
    notification: NotificationData
    searchBooks: (query: string) => Promise<void>
    setSelectedBook: (book: Book) => void
    addToShelf: (book: Book) => void
    removeFromShelf: (book: Book) => void
}

const defaultValue: BooksContextType = {
    results: [],
    selectedBook: undefined,
    myShelf: [],
    loading: false,
    notification: { title: '', message: '', showNotification: false },
    searchBooks: async () => {},
    setSelectedBook: () => {},
    addToShelf: () => {},
    removeFromShelf: () => {},
}

export const BooksContext = createContext<BooksContextType>(defaultValue)
BooksContext.displayName = 'Books'
