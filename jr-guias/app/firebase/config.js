// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABMKJrlwm9UgC93QKLoUyM74amVnQqj5A",
  authDomain: "e-commers-remate.firebaseapp.com",
  projectId: "e-commers-remate",
  storageBucket: "e-commers-remate.appspot.com",
  messagingSenderId: "879679770243",
  appId: "1:879679770243:web:13ba55c15252bceb3055b6"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);

const auth =getAuth(app);

export {auth};

