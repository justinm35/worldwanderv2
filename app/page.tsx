import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='rounded-lg border-2 border-neutral-500 p-10 shadow-inner'>
        <h1 className='text-3xl font-bold text-neutral-600'>WorldWander V2</h1>
      </div>
    </main>
  )
}
