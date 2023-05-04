import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

interface pageProps {
  
}

const page = async({}) => {
  const session = await getServerSession()
  if(!session) notFound()
  return (
    <div className="p-5 rounded-lg border-2 border-gray-200 max-w-lg mx-auto shadow-inner">
      <h1 className='text-red-500 text-3xl font-bold text-center'>Protected Page</h1>
    </div>)
}

export default page