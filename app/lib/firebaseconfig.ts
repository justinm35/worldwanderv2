// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore"
import admin from 'firebase-admin'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDujHfHiCM_bL_y_I0_SmBXSpp7XAZS0Gg",
    authDomain: "worldwanderv2.firebaseapp.com",
    projectId: "worldwanderv2",
    storageBucket: "worldwanderv2.appspot.com",
    messagingSenderId: "157165133661",
    appId: "1:157165133661:web:14c39ac31911313d5cd2b4",
    measurementId: "G-2YB71YQ5GJ"

  };


// Initialize Firebase
export const firebaseapp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(firebaseapp);


export const userColRef = collection(db, 'Users')

