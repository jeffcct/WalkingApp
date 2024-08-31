// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAslQ1Oy3xZR3M3vc5Uyhgxn8-RZbwjtE8",
  authDomain: "runlock-aa579.firebaseapp.com",
  projectId: "runlock-aa579",
  storageBucket: "runlock-aa579.appspot.com",
  messagingSenderId: "692756704161",
  appId: "1:692756704161:web:68fba4f329820a4d2cb9e0",
  measurementId: "G-C8HNXNHXDP"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);