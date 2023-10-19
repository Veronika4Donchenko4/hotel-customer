// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDadpnaUhdRzrhIx8YRRvlGfwYHP1wxPng",
  authDomain: "hotel-21422.firebaseapp.com",
  projectId: "hotel-21422",
  storageBucket: "hotel-21422.appspot.com",
  messagingSenderId: "606908109162",
  appId: "1:606908109162:web:acef0551109d1dc47b9513"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
