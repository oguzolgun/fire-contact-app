// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy8oX95BPQh5KDWWVtqu8CgM-EF9yb4KY",
  authDomain: "fire-contact-app-c30f8.firebaseapp.com",
  databaseURL: "https://fire-contact-app-c30f8-default-rtdb.firebaseio.com",
  projectId: "fire-contact-app-c30f8",
  storageBucket: "fire-contact-app-c30f8.appspot.com",
  messagingSenderId: "306668246210",
  appId: "1:306668246210:web:afc5f2537bb6573666175b"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

