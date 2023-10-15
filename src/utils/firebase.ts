// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEHrHoPCcxGX6LbcbDv-3fepv92I5poIQ",
  authDomain: "kaares-26c5a.firebaseapp.com",
  projectId: "kaares-26c5a",
  storageBucket: "kaares-26c5a.appspot.com",
  messagingSenderId: "122528662902",
  appId: "1:122528662902:web:e5b55aa3aee06f0d18e657",
  measurementId: "G-WZX8PWLDL6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);