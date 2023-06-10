import './globals.css'

import { Header } from '@/components/Header'

export const metadata = {
  title: 'Aoba personal site',
  description: 'Aoba personal site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className='light'>
      <body className='vsc-initialized m-auto max-w-2xl dark:bg-black'>
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
