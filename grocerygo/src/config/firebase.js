import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyC_HnVSc5C9aycp-LQZxIBXaCKNi485Iww",

    authDomain: "grocerygo-25de7.firebaseapp.com",

    projectId: "grocerygo-25de7",

    storageBucket: "grocerygo-25de7.appspot.com",

    messagingSenderId: "961999716975",

    appId: "1:961999716975:web:9a387ac6795320f574439a",

    measurementId: "G-KJBGVLCPMC"

};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);