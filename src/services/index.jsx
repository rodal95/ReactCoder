// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2e1_BPwH1DHdrv4B2Nzgp27hHk7rKdkE",
  authDomain: "ecommerce-38280rodrigo.firebaseapp.com",
  projectId: "ecommerce-38280rodrigo",
  storageBucket: "ecommerce-38280rodrigo.appspot.com",
  messagingSenderId: "686156672897",
  appId: "1:686156672897:web:ba5301da2f604c709ac280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

