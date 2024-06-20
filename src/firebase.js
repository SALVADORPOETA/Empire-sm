// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp7va20c-H8C5hDtVVBSPqVz_Y_KbwEEM",
  authDomain: "empire-bc434.firebaseapp.com",
  projectId: "empire-bc434",
  storageBucket: "empire-bc434.appspot.com",
  messagingSenderId: "896013042961",
  appId: "1:896013042961:web:97750dbf509c5ca01bf8b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
