import { Poppins } from 'next/font/google'
import { BooksProvider } from '@/context/BooksProvider'
import type { Metadata } from 'next'
import newrelic from 'newrelic'
import Header from '@/components/header'
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

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR">
            <head>
                <script
                    id="new-relic"
                    dangerouslySetInnerHTML={{
                        __html: newrelic.getBrowserTimingHeader(),
                    }}
                />
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
