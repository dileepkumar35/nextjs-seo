import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Interest Deduction Limitation Rules',
    description: 'Comprehensive guide to UAE Corporate Tax interest deduction limitation rules, covering general and specific limitations, qualifying infrastructure projects, and deductible interest expenditure for businesses.',
    keywords: 'interest deduction, limitation rules, UAE corporate tax, deductible interest, business expenditure',
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    publisher: 'Your Company',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: 'Interest Deduction Limitation Rules',
        description: 'Comprehensive guide to UAE Corporate Tax interest deduction limitation rules, covering general and specific limitations, qualifying infrastructure projects, and deductible interest expenditure for businesses.',
        url: 'https://yourwebsite.com',
        siteName: 'Your Site Name',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Interest Deduction Limitation Rules',
        description: 'Comprehensive guide to UAE Corporate Tax interest deduction limitation rules, covering general and specific limitations, qualifying infrastructure projects, and deductible interest expenditure for businesses.',
        creator: '@yourtwitterhandle',
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link href='https://gtlcdn-eufeh8ffbvbvacgf.z03.azurefd.net/guide/stylesheets/prod/guide.css' rel='stylesheet' />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
