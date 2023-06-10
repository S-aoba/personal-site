import './globals.css'

import { Header } from '@/components/Header'

// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aoba personal site',
  description: 'Aoba personal site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='m-auto max-w-2xl'>
        <main className='min-h-screen p-6 pt-3 md:pt-6'>
          <div className='container mx-auto flex h-fit flex-col'>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
