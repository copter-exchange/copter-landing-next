import './globals.css'
import type { Metadata } from 'next'
import { copterFont } from '@/config/fonts'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Copter Payments',
  description: 'Servicio de pagos y cobros hechos a la medida de tus necesidades.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='scroll-smooth'>
      <body className={copterFont.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
