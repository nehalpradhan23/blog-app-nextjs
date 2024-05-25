// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjslamadevblogapp.firebaseapp.com",
  projectId: "nextjslamadevblogapp",
  storageBucket: "nextjslamadevblogapp.appspot.com",
  messagingSenderId: "1047413697378",
  appId: "1:1047413697378:web:a00ef157147059d3a25a3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
