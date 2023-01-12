// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTQ5iiyzvVCOvJ0cQ-E_msL3_go8IYYUw",
  authDomain: "linkedin-75990.firebaseapp.com",
  projectId: "linkedin-75990",
  storageBucket: "linkedin-75990.appspot.com",
  messagingSenderId: "714034095063",
  appId: "1:714034095063:web:bd5a8950ecac959d7ee192",
  measurementId: "G-HN5SJHS7GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)