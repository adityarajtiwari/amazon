import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// import auth from'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHM36wwNDoJK3JwdO3fHXR6JYZRbrSUEw",
    authDomain: "clone-3f99e.firebaseapp.com",
    projectId: "clone-3f99e",
    storageBucket: "clone-3f99e.appspot.com",
    messagingSenderId: "966112023982",
    appId: "1:966112023982:web:63eb03a8de70d5c6f0a43f",
    measurementId: "G-Y2NE03V5S2"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export { db};
