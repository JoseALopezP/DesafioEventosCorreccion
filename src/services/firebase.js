// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSVMD9401bgOT97mJ0iWcF4p82cBJQzUM",
  authDomain: "reactcoderhouse-joselopez.firebaseapp.com",
  projectId: "reactcoderhouse-joselopez",
  storageBucket: "reactcoderhouse-joselopez.appspot.com",
  messagingSenderId: "797534302929",
  appId: "1:797534302929:web:5c7ad3db6d72fff51d8bf0",
  measurementId: "G-9NGYPCTB5Z"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export default db