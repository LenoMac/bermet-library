// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xC0S0pjsigSle0UNGoBM3Q1_a7I2zm4",
  authDomain: "my-library-65d9d.firebaseapp.com",
  projectId: "my-library-65d9d",
  storageBucket: "my-library-65d9d.appspot.com",
  messagingSenderId: "168069173279",
  appId: "1:168069173279:web:917810cf9a0d6a45c9452a",
  measurementId: "G-MCVM9RMZGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();


export default app;
