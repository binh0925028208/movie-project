import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzeXKiU9yNxJ8Xvb1riFj2wu0RC26DKOw",
  authDomain: "film-project-cc94e.firebaseapp.com",
  projectId: "film-project-cc94e",
  storageBucket: "film-project-cc94e.firebasestorage.app",
  messagingSenderId: "206855888581",
  appId: "1:206855888581:web:cc64d861ba46767d31daac",
  measurementId: "G-MCJHCYKC1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();