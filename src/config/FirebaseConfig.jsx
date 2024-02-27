// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0O8SYz1jaNumJuU_pY6RbxsICbXo0Fv4",
  authDomain: "vite-react-practice.firebaseapp.com",
  databaseURL: "https://vite-react-practice-default-rtdb.firebaseio.com",
  projectId: "vite-react-practice",
  storageBucket: "vite-react-practice.appspot.com",
  messagingSenderId: "68743560635",
  appId: "1:68743560635:web:d7ea0336846c1d889e989e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
