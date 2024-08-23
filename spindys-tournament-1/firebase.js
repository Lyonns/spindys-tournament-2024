// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIFhIhptUqDwxh5C5Sc1ryG9iF8_bRoE4",
    authDomain: "spindys-tournament-2024.firebaseapp.com",
    projectId: "spindys-tournament-2024",
    storageBucket: "spindys-tournament-2024.appspot.com",
    messagingSenderId: "694650611747",
    appId: "1:694650611747:web:28dd320cc241d997476996",
    measurementId: "G-0926B0HV4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export { db };