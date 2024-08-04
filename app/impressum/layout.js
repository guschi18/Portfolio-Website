import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Impressum | WEB3 EngineerDE',
  description: 'Der WEB3 Entwickler',
}

export default function RootLayout({ children }) {
    return (
      <html lang="de">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }