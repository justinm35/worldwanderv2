"use client"

import { FC } from 'react'
import {signIn} from 'next-auth/react'
import Image from 'next/image'


interface ILoginSelectorProps {
  
}

async function loginWithGoogle() {
    try {
        await signIn('google')
    } catch (error) {  
        console.error(error)
    }
}
async function loginWithInstagram() {
    try {
        await signIn('instagram')
    } catch (error) {  
        console.error(error)
    }
}
async function loginWithTwitter() {
    try {
        await signIn('twitter')
    } catch (error) {  
        console.error(error)
    }
}

const LoginSelector: FC<ILoginSelectorProps> = ({}) => {
  return (
    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-gray-800 px-20 mt-36 lg:mt-0' >
        <h1 className='font-semibold text-4xl'>Welcome Back!</h1>    
        <p className='font-medium text-lg pt-2 pb-5 text-gray-500'>Choose one to get started</p>
        <div className='flex flex-col space-y-4 min-w-max w-1/2 lg:w-11/12 items-center'>
            <button className="transition ring-stone-400 p-4 rounded-md w-full font-semibold flex items-center justify-center gap-3 ring-1 hover:ring-2 hover:ring-violet-800 active:scale-95 disabled:grayscale disabled:bg-zinc-200" 
            onClick={loginWithGoogle}>
                <span> <Image src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="google logo" width="20" height="20"/></span>
                Continue with Google
            </button>
            <button disabled className="transition ring-stone-400 p-4 rounded-md w-full font-semibold flex items-center justify-center gap-3 ring-1 hover:ring-2 hover:ring-violet-800 active:scale-95 disabled:grayscale disabled:bg-zinc-200" 
            onClick={loginWithInstagram}>
                <span> <Image src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg" alt="instagram logo" width="20" height="20"/></span>
                Continue with Instagram
            </button>
            <button disabled className="transition ring-stone-400 p-4 rounded-md w-full font-semibold flex items-center justify-center gap-3 ring-1 hover:ring-2 hover:ring-violet-800 active:scale-95 disabled:grayscale disabled:bg-zinc-200" 
            onClick={loginWithTwitter}>
                <span> <Image src="https://www.vectorlogo.zone/logos/twitter/twitter-official.svg" alt="twitter logo" width="20" height="20"/></span>
                Continue with Twitter
            </button>
            <div className='w-full'>
                <p className=''>Dont have an account? <span><a className='hover:text-indigo-800 hover:underline hover:underline-offset-4 hover:decoration-2'>Sign Up</a></span></p>
            </div>
        </div>
    </div>)
}

export default LoginSelector