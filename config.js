import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAVc2mtTG4O2TOe5w3hJaVyOK_hJ2Tb1o4",
  authDomain: "otptest-a58c4.firebaseapp.com",
  projectId: "otptest-a58c4",
  storageBucket: "otptest-a58c4.appspot.com",
  messagingSenderId: "27040206681",
  appId: "1:27040206681:web:ea1f388dbdd6b8b7e04648",
  measurementId: "G-5ED72N3665",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
