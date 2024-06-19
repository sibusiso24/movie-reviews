// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxF_OWovl8leEN5OKtUKuwsZ_1BG0pqlk",
  authDomain: "learning-2a292.firebaseapp.com",
  databaseURL: "https://learning-2a292-default-rtdb.firebaseio.com",
  projectId: "learning-2a292",
  storageBucket: "learning-2a292.appspot.com",
  messagingSenderId: "1048413598684",
  appId: "1:1048413598684:web:7ad69e29378ec0d96c9519",
  measurementId: "G-YR8LYW47YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);