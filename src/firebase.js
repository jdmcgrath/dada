import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtSrA1Eo0Pm_qy8bPZJhAcxztSfj-Xt8M",
    authDomain: "dada-da4d5.firebaseapp.com",
    databaseURL: "https://dada-da4d5.firebaseio.com",
    projectId: "dada-da4d5",
    storageBucket: "dada-da4d5.appspot.com",
    messagingSenderId: "694763241747",
    appId: "1:694763241747:web:1687c1023a2c36628e1ae6"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
