import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEb_dq9c849M1luHkUP6H9tB3NQ0TWuHI",
  authDomain: "simple-firebase-app-d760c.firebaseapp.com",
  databaseURL: "https://simple-firebase-app-d760c.firebaseio.com",
  projectId: "simple-firebase-app-d760c",
  storageBucket: "simple-firebase-app-d760c.appspot.com",
  messagingSenderId: "1045187140758",
  appId: "1:1045187140758:web:9f11703d0bc916ad6a36b7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
