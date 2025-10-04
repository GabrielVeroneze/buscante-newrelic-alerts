'use client'

import { useBooks } from '@/context/useBooks'
import { Book } from '@/types/Book'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import BookNotFound from '@/assets/images/book-not-found.webp'

interface BookCardProps {
    book: Book
    variant: 'small' | 'large'
    isRemoveButton?: boolean
}

const BookCard = ({
    book,
    variant = 'small',
    isRemoveButton = false,
}: BookCardProps) => {
    const bookSize = {
        width: variant === 'small' ? 178 : 206,
        height: variant === 'small' ? 242 : 334,
    }

    const { setSelectedBook, removeFromShelf } = useBooks()

    const onClick = () => {
        setSelectedBook(book)
    }

    return (
        <div className="flex items-center rounded-lg shadow-2xl my-4 w-full">
            <div className="h-full bg-gray-700 flex items-center rounded-l-lg">
                <Image
                    src={book.volumeInfo?.imageLinks?.thumbnail ?? BookNotFound}
                    className="rounded-l-lg"
                    alt="Capa do livro"
                    width={bookSize.width}
                    height={bookSize.height}
                    quality={100}
                    objectFit="cover"
                />
            </div>
            <div className="ml-4 py-2 flex-row justify-between">
                <h2 className="text-light-blue font-semibold text-lg pr-2 line-clamp-2 max-w-56">
                    {book.volumeInfo.title}
                </h2>
                {book.volumeInfo?.authors && (
                    <>
                        <h3 className="text-dark-gray font-semibold mt-1">
                            Autor(a):
                        </h3>
                        <p className="text-dark-gray">
                            {book.volumeInfo?.authors?.[0]}
                        </p>
                    </>
                )}
                <h3 className="text-dark-gray font-semibold mt-1">
                    Data de publicação
                </h3>
                <p className="text-dark-gray">
                    {new Date(
                        book.volumeInfo.publishedDate,
                    ).toLocaleDateString()}
                </p>
                {book.volumeInfo?.publisher && (
                    <>
                        <h3 className="text-dark-gray font-semibold mt-1">
                            Editora
                        </h3>
                        <p className="text-dark-gray">
                            {book.volumeInfo.publisher}
                        </p>
                    </>
                )}
                {variant === 'small' && (
                    <div className="mt-4">
                        {isRemoveButton ? (
                            <Button
                                onClick={() => removeFromShelf(book)}
                                title="Remover da estante"
                                variant="secondary"
                            />
                        ) : (
                            <Link
                                href={`/book-details/${encodeURIComponent(
                                    book.id,
                                )}`}
                            >
                                <Button
                                    onClick={onClick}
                                    title="Mais detalhes"
                                />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookCard
