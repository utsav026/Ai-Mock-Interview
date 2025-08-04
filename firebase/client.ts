// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAGK4kf9FFgOYwfuQT1ux8rScWMkF4PDE",
  authDomain: "ai-mock-interview-bdfe9.firebaseapp.com",
  projectId: "ai-mock-interview-bdfe9",
  storageBucket: "ai-mock-interview-bdfe9.firebasestorage.app",
  messagingSenderId: "1028298040492",
  appId: "1:1028298040492:web:cd61f188977807e1c9ab09",
  measurementId: "G-4BMD5E3WPV"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db = getFirestore(app)