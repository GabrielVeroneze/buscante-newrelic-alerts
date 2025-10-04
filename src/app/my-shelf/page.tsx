'use client'

import { useBooks } from '@/context/useBooks'
import BooksList from '@/components/books-list'
import Notification from '@/components/notification'

export default function MyShelf() {
    const { myShelf, notification } = useBooks()

    return (
        <div>
            <h1 className="text-light-blue font-semibold text-4xl text-center mt-10">
                Minha Estante
            </h1>
            <BooksList books={myShelf} isMyShelf />
            {notification.showNotification && (
                <Notification {...notification} />
            )}
        </div>
    )
}
