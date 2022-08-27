// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3P-b3Dmh63JDdIqLpxNVotahEJrfJ_Yg",
  authDomain: "test-ce4f3.firebaseapp.com",
  projectId: "test-ce4f3",
  storageBucket: "test-ce4f3.appspot.com",
  messagingSenderId: "254996520149",
  appId: "1:254996520149:web:1b24f4b673068710df565c",
  measurementId: "G-4QLZW66C66"
};

// create env file later please

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
