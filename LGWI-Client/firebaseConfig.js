// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqShP9wzIwu-YLljSmcBy2KOBZzzZRoog",
  authDomain: "lgwi-csv.firebaseapp.com",
  projectId: "lgwi-csv",
  storageBucket: "lgwi-csv.appspot.com",
  messagingSenderId: "949701907108",
  appId: "1:949701907108:web:6e22714f0abe16c7a54c31",
  measurementId: "G-0DLF9N9XKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);