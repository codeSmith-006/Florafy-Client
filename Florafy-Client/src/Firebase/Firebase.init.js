// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUTgnZ-gP4qt6b9wez96hcTnJPX7Day7c",
  authDomain: "assignment-604fb.firebaseapp.com",
  projectId: "assignment-604fb",
  storageBucket: "assignment-604fb.firebasestorage.app",
  messagingSenderId: "396502865263",
  appId: "1:396502865263:web:4b7f5ab49dc0df6425849a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)