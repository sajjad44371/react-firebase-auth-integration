// Danger !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1sTqD-Q8zgaF2aAHcumSukg_mOI47_S4",
  authDomain: "react-firebase-auth-497fa.firebaseapp.com",
  projectId: "react-firebase-auth-497fa",
  storageBucket: "react-firebase-auth-497fa.firebasestorage.app",
  messagingSenderId: "344966720607",
  appId: "1:344966720607:web:e1815d56ad7b9c55aebfea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
