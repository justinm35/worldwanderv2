export function googleCredGrabber() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if(!clientId || clientId.length === 0){
        throw new Error('Missing GOOGLE_CLIENT_ID')
    }
    if(!clientSecret || clientSecret.length === 0){
        throw new Error('Missing GOOGLE_CLIENT_SECRET')
    }
    return {clientId, clientSecret}
}

export function firebaseCredGrabber() {

    const projectId = process.env.FIREBASE_PROJECT_ID
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
    const privateKey = process.env.FIREBASE_PRIVATE_KEY

    if(!projectId || projectId.length === 0){
        throw new Error('Missing FIREBASE_PROJECT_ID')
    }
    if(!clientEmail || clientEmail.length === 0){
        throw new Error('Missing FIREBASE_CLIENT_EMAIL')
    }
    if(!privateKey || privateKey.length === 0){
        throw new Error('Missing FIREBASE_PRIVATE_KEY')
    }
    return {projectId, clientEmail, privateKey}
}