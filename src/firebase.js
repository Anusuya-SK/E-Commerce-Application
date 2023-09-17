import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3rCcXl7-XLSeCBFoT-CmtJotc4dNTKJw",
    authDomain: "clone-667f2.firebaseapp.com",
    projectId: "clone-667f2",
    storageBucket: "clone-667f2.appspot.com",
    messagingSenderId: "80971302931",
    appId: "1:80971302931:web:42cdbc3d8e710790e897e6",
    measurementId: "G-622YWCQH03"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }