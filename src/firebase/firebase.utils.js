import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYC3LtaFH-2wHB41rORmf-DguR6ISvKDM",
  authDomain: "eclothing-db-ben123.firebaseapp.com",
  databaseURL: "https://eclothing-db-ben123.firebaseio.com",
  projectId: "eclothing-db-ben123",
  storageBucket: "eclothing-db-ben123.appspot.com",
  messagingSenderId: "482173846298",
  appId: "1:482173846298:web:a6dbb4e239b08cf920a2a3",
  measurementId: "G-LXDET8D8R1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
