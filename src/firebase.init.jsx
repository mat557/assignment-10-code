// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMGDwfX67tffcEHT3CwJZxRwKnS2aknqs",
  authDomain: "assignment-10-cbb92.firebaseapp.com",
  projectId: "assignment-10-cbb92",
  storageBucket: "assignment-10-cbb92.appspot.com",
  messagingSenderId: "290309844254",
  appId: "1:290309844254:web:103584ce2ae23293dc2d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;