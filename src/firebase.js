// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqV8seOAFHbRiAZuKpgu3LmeQm9WLmIE8",
  authDomain: "ajay-portfolio-react.firebaseapp.com",
  projectId: "ajay-portfolio-react",
  storageBucket: "ajay-portfolio-react.appspot.com",
  messagingSenderId: "418189010926",
  appId: "1:418189010926:web:9e00d50aab373aadab10ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();