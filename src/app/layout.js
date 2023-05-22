import './globals.css'
import { Inter } from 'next/font/google'
import Provider from "../components/Provider"
import Header from "../components/Header"
import Feed from '../components/Feed'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram pixel perfect',
  description: 'Instagram pixel perfect built with nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />    
          <div className="bg-gray-50 min-h-screen"><Feed/>{children}</div> 
        </Provider>
      </body>
    </html>
  )
}
