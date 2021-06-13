// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDWff10Je0mSuX1XPv6Qfx_0MQEU3A45u4",
  authDomain: "slack-6b56b.firebaseapp.com",
  projectId: "slack-6b56b",
  storageBucket: "slack-6b56b.appspot.com",
  messagingSenderId: "314624916223",
  appId: "1:314624916223:web:9820817ded4d83a4a2eaca",
  measurementId: "G-BLK5WR8SZV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
