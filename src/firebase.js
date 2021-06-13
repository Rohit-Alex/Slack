// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyANNQIb8btexxS7UOeWH_NLlKsLs3H75Qo",
  authDomain: "slack-2c87b.firebaseapp.com",
  projectId: "slack-2c87b",
  storageBucket: "slack-2c87b.appspot.com",
  messagingSenderId: "322364203262",
  appId: "1:322364203262:web:364c657df1c3409d1845af",
  measurementId: "G-CL2YTMY6N8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
