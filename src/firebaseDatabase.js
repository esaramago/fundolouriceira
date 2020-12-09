import firebase from 'firebase/app'
import 'firebase/firestore'

/* var firebaseConfig = {
    apiKey: "AIzaSyBDxOUlMhzlP2_1e7d8x0IfZN8DZdFjdLU",
    authDomain: "fundolouriceira.firebaseapp.com",
    databaseURL: "https://fundolouriceira-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fundolouriceira",
    storageBucket: "fundolouriceira.appspot.com",
    messagingSenderId: "878643066396",
    appId: "1:878643066396:web:78b8eb9c3a07a6bc9c51d9",
    measurementId: "G-RL040BLB1B"
}; */
export const db = firebase.initializeApp({ projectId: 'fundolouriceira' }).firestore();