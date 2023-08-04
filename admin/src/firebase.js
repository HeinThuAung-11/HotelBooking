// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4X7RkCg4voXJlR1Ff4KXcJItn2NKvets",
  authDomain: "hotelbooking-44ad4.firebaseapp.com",
  projectId: "hotelbooking-44ad4",
  storageBucket: "hotelbooking-44ad4.appspot.com",
  messagingSenderId: "11291362528",
  appId: "1:11291362528:web:df517eb61448cc1b4b7c85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
