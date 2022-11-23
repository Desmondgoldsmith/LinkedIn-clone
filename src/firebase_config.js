import {firebase} from 'firebase/compat/app';
import {firestore} from 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTQ5iiyzvVCOvJ0cQ-E_msL3_go8IYYUw",
    authDomain: "linkedin-75990.firebaseapp.com",
    projectId: "linkedin-75990",
    storageBucket: "linkedin-75990.appspot.com",
    messagingSenderId: "714034095063",
    appId: "1:714034095063:web:bd5a8950ecac959d7ee192",
    measurementId: "G-HN5SJHS7GF"
})

const DB = firebase.firestore(firebaseApp)
export default DB