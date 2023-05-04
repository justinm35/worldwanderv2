import { FC } from 'react'
import LoginSelector from '@/app/components/LoginSelector'
import Image from 'next/image'
import WWLogoWhite from '/public/WW-LOGO-WHITE.png'
interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
  <div className='w-screen flex items-center justify-start'>
    <LoginSelector />
    <div className='relative h-screen w-1/2 text-center hidden lg:block'>
      <div className='w-full h-full justify-center items-center flex text-neutral-50 flex-col -mt-22'>
        {/* <Image width="250" height="250" src={WWLogoWhite} alt="World Wander logo"/> */}
        <h1 className='text-neutral-50 text-5xl font-bold z-10 mx-auto shadow-xl'>Start exploring. Never stop.</h1>
      </div>
    <Image alt="Picture of island" fill style={{objectFit: 'cover'}}className='rounded-tl-3xl rounded-bl-3xl absolute -z-10 shadow-lg'
     src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"/>
    </div>
  </div>
  )
}

export default page