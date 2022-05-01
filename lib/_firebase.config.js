// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB70inLNyZbF778tw_Nd4-VMfvVSLuJFZE",
  authDomain: "general-purpose-347623.firebaseapp.com",
  projectId: "general-purpose-347623",
  storageBucket: "general-purpose-347623.appspot.com",
  messagingSenderId: "250785634435",
  appId: "1:250785634435:web:b5c82fe4056ba0dbe663b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
