import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth";
import GoogleProvidor from 'next-auth/providers/google'
import {googleCredGrabber, firebaseCredGrabber} from "../../(helpers)/CredentialGrabbers";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions: NextAuthOptions = {
    adapter:  FirestoreAdapter({
        credential: cert({
            projectId: firebaseCredGrabber().projectId,
            clientEmail: firebaseCredGrabber().clientEmail,
            privateKey : firebaseCredGrabber().privateKey
        })
    }),
    
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvidor({
            clientId: googleCredGrabber().clientId,
            clientSecret: googleCredGrabber().clientSecret,
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        redirect() {
            return '/dashboard'
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }