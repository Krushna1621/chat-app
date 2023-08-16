// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkflU3HFp5c2JI3xPeCsxrZSzP18eOq8M",
    authDomain: "chatapp-a75ef.firebaseapp.com",
    projectId: "chatapp-a75ef",
    storageBucket: "chatapp-a75ef.appspot.com",
    messagingSenderId: "68123758695",
    appId: "1:68123758695:web:928e6d7fb151336ea644c2"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Initialize the auth instance
export const provider = new GoogleAuthProvider();
