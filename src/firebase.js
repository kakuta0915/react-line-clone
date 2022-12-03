import firebase from 'firebase/compat/app'; // firebaseが入っている
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


//初期化
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCO-Bsto2J1nQqP_T2G_m3ufxMaTgMVRY",
    authDomain: "react-line-clone-second.firebaseapp.com",
    projectId: "react-line-clone-second",
    storageBucket: "react-line-clone-second.appspot.com",
    messagingSenderId: "208134572030",
    appId: "1:208134572030:web:17e148c5c8daf1bd6362af"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };