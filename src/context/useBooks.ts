import { useContext } from 'react'
import { BooksContext } from './BooksContext'

export const useBooks = () => {
    const context = useContext(BooksContext)

    if (!context) {
        throw new Error('useContext must be used within a BooksProvider')
    }

    return context
}
