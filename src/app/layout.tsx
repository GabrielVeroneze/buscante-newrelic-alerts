import { Poppins } from 'next/font/google'
import { BooksProvider } from '@/context/BooksProvider'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
    style: 'normal',
})
export const metadata: Metadata = {
    title: 'Buscante',
    description: 'Sua estante virtual de livros',
}

const newRelicScript = ``

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR">
            <head>
                <Script id="newRelicScript">{newRelicScript}</Script>
            </head>
            <body className={poppins.className}>
                <BooksProvider>
                    <Header />
                    {children}
                </BooksProvider>
            </body>
        </html>
    )
}
