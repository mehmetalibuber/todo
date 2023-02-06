import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCe8Jgxh2_mkK31tIZMi-JYlbyc9Yu5OhU",
  authDomain: "todo-ultof-com.firebaseapp.com",
  projectId: "todo-ultof-com",
  storageBucket: "todo-ultof-com.appspot.com",
  messagingSenderId: "831728805969",
  appId: "1:831728805969:web:1987a533530f895d993070",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export default {
  firebase,
  auth,
  db,
  storage,
};
