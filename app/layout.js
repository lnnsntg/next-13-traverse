import { Poppins, Raleway } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin']
})

// const poppins = Poppins({
//   weight: ['400', '700'],
//   style: ['italic'],
//   subsets: ['latin']
// })

export const metadata = {
  title: 'Lenin Media',
  description: 'Web development',
  keywords: 'web development, developer, web design, react, node, mongodb, angular,html, css '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header></Header>
        <main className={'container'}>{children}</main>
      </body>
    </html>
  )
}