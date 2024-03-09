// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyB8N7d2idovL1oGPjH_dgYqQZ-AiTBXCf8",

  authDomain: "expense-tracker-412c8.firebaseapp.com",

  projectId: "expense-tracker-412c8",

  storageBucket: "expense-tracker-412c8.appspot.com",

  messagingSenderId: "278838144198",

  appId: "1:278838144198:web:18344165510f0ce60ffbc7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)