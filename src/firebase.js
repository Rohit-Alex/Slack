// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAwvavWu9fXw9WFyZ7P6S6_8cW-FCViPQg",
  authDomain: "slack-clone-61b70.firebaseapp.com",
  projectId: "slack-clone-61b70",
  storageBucket: "slack-clone-61b70.appspot.com",
  messagingSenderId: "936505181374",
  appId: "1:936505181374:web:2880813ebfc4c43d98caef",
  measurementId: "G-BYG1KTBR0K",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
