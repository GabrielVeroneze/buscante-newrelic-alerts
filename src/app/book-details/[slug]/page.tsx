'use client'

import { useBooks } from '@/context/useBooks'
import Link from 'next/link'
import Image from 'next/image'
import BookCard from '@/components/book-card'
import Button from '@/components/button'
import Notification from '@/components/notification'
import NotFound from '@/assets/images/not-found.webp'

export default function BookDetails() {
    const { selectedBook, addToShelf, notification } = useBooks()

    return (
        <main className="flex-row h-full mx-4 md:mx-10 xl:mx-60">
            <Link href="/">
                <h1 className="hover:text-dark-blue text-light-blue font-semibold text-lg mt-4">{`< Voltar`}</h1>
            </Link>
            {!selectedBook ? (
                <div className="flex-row items-center justify-center text-center mt-4">
                    <h1 className="text-2xl font-semibold">
                        Nenhum resultado encontrado.
                    </h1>
                    <Image
                        src={NotFound}
                        alt="Livro não encontrado"
                        objectFit="cover"
                    />
                </div>
            ) : (
                <>
                    <BookCard book={selectedBook} variant="large" />
                    {selectedBook?.volumeInfo.description && (
                        <p className="my-4">
                            {selectedBook?.volumeInfo.description}
                        </p>
                    )}
                    <Button
                        onClick={() => addToShelf(selectedBook)}
                        title="Adicionar à estante"
                        variant="secondary"
                    />
                </>
            )}
            {notification.showNotification && (
                <Notification {...notification} />
            )}
        </main>
    )
}
