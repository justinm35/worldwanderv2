"use client"
import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'

interface SignoutButtonProps {
  
}

const SignoutButton: FC<SignoutButtonProps> = ({}) => {
const [isSigningOut, setIsSigningOut] = useState<boolean>(false)
  return (
  <button onClick={async () => {
    setIsSigningOut(true)
    try {
        await signOut()
    }catch(error) {
        console.error('There was a problem signing out')
    }finally{
        setIsSigningOut(false)
    }
  }} 
  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100" >
  Temp Sign Out
</button>
  )
}

export default SignoutButton