import { FC, ReactNode } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import {  getServerSession } from 'next-auth'
interface ProvidersProps {
    children: ReactNode
}



const Providers = async ({ children }: ProvidersProps) => {
const session  = await getServerSession()
    
 return(
  <>
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  </>
  )
}

export default Providers