import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnYj3Ze9JcJEih_eSM-t2ES6iwLwnRLx0",
  authDomain: "linkedin-clone-56634.firebaseapp.com",
  projectId: "linkedin-clone-56634",
  storageBucket: "linkedin-clone-56634.appspot.com",
  messagingSenderId: "506698802018",
  appId: "1:506698802018:web:b8b4985323bb0fe2b2023b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db          = firebaseApp.firestore();
const auth        = firebase.auth();

export { db, auth };
