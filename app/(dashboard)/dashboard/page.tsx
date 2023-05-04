import { userColRef } from '@/app/lib/firebaseconfig'
import { getDocs } from 'firebase/firestore'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="p-5 rounded-lg border-2 border-gray-200 max-w-lg mx-auto shadow-inner">
      <h1 className='text-green-500 text-3xl font-bold text-center'>Public Page</h1>
    </div>)
}

export default page
