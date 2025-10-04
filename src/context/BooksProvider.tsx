'use client'

import { useState } from 'react'
import { BooksContext } from './BooksContext'
import { NotificationData } from '@/types/NotificationData'
import { Book } from '@/types/Book'

interface BooksProviderProps {
    children: React.ReactNode
}

export const BooksProvider = ({ children }: BooksProviderProps) => {
    const [results, setResults] = useState<Book[]>([])
    const [myShelf, setMyShelf] = useState<Book[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedBook, setSelectedBook] = useState<Book | undefined>(
        undefined
    )
    const [notification, setNotification] = useState<NotificationData>({
        title: '',
        message: '',
        showNotification: false,
    })

    const searchBooks = async (query: string) => {
        setLoading(true)

        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            )

            const data = await response.json()

            setResults(data.items)
            console.log(data.items)
        } catch (error) {
            console.error('Error fetching data: ', error)
        } finally {
            setLoading(false)
        }
    }

    const addToShelf = (book: Book) => {
        const isDuplicate = myShelf.some((item) => item.id === book.id)

        if (isDuplicate) {
            setNotification({
                title: 'Oops! Ocorreu um erro',
                message:
                    'Este livro já está na sua estante. Adicione outro livro.',
                showNotification: true,
            })

            setTimeout(() => {
                setNotification({
                    title: '',
                    message: '',
                    showNotification: false,
                })
            }, 2500)

            return
        }

        setMyShelf((previousBooks) => [...previousBooks, book])

        setNotification({
            title: 'Sucesso!',
            message: 'Livro adicionado com sucesso na sua estante.',
            showNotification: true,
        })

        setTimeout(() => {
            setNotification({ title: '', message: '', showNotification: false })
        }, 2500)

        return
    }

    const removeFromShelf = (book: Book) => {
        setMyShelf((previousBooks) =>
            previousBooks.filter((item) => item.id !== book.id)
        )

        setNotification({
            title: 'Sucesso!',
            message: 'O livro foi removido com sucesso da sua estante.',
            showNotification: true,
        })

        setTimeout(() => {
            setNotification({ title: '', message: '', showNotification: false })
        }, 2500)
    }

    return (
        <BooksContext.Provider
            value={{
                results,
                selectedBook,
                myShelf,
                loading,
                notification,
                searchBooks,
                setSelectedBook,
                addToShelf,
                removeFromShelf,
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}
