import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQo_7hObJQ16LZZ1FZMgicObiWa8KPn0k",
  authDomain: "clone-18217.firebaseapp.com",
  projectId: "clone-18217",
  storageBucket: "clone-18217.appspot.com",
  messagingSenderId: "290448316042",
  appId: "1:290448316042:web:dae15d91f43cc9fc4a3f73"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();