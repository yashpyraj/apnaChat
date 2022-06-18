// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDbpV2aAabp30hyfbsUFDay0xmk1c3dfT8",
    authDomain: "apnachat-9190d.firebaseapp.com",
    projectId: "apnachat-9190d",
    storageBucket: "apnachat-9190d.appspot.com",
    messagingSenderId: "982601746995",
    appId: "1:982601746995:web:4f1440608250c93353f146",
    measurementId: "G-WQJ8R4TJ81"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };