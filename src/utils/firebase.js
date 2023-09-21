// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZZ8K6Pvpbe63cJTZy71HInc3F6nQWQk",
  authDomain: "netflixgpt-51a2c.firebaseapp.com",
  projectId: "netflixgpt-51a2c",
  storageBucket: "netflixgpt-51a2c.appspot.com",
  messagingSenderId: "671437378671",
  appId: "1:671437378671:web:9e7933e518e5e7cc57a99a",
  measurementId: "G-QR0ENF43CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();