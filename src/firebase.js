// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXY5axbEbQtOcRuw3oV9FCh-pw8BuIL3c",
  authDomain: "todo-app-cp-34a35.firebaseapp.com",
  databaseURL: "https://todo-app-cp-34a35-default-rtdb.firebaseio.com",
  projectId: "todo-app-cp-34a35",
  storageBucket: "todo-app-cp-34a35.appspot.com",
  messagingSenderId: "689670536770",
  appId: "1:689670536770:web:79123e61de377d3cc9f7db",
  measurementId: "G-16PPYMLPMM",
});

const db = firebaseApp.firestore();

export default db;
