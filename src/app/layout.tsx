import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Game Faster',
  description: 'Game Faster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className='h-full bg-slate-700'>
      <body className='w-full h-full dark:bg-slate-700'>
        <main className='container h-full p-3 mx-auto dark:bg-slate-700'>
          <div className='container flex flex-col items-center flex-grow h-full gap-6 mx-auto bg-slate-700 '>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
