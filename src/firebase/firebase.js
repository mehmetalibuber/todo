// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe8Jgxh2_mkK31tIZMi-JYlbyc9Yu5OhU",
  authDomain: "todo-ultof-com.firebaseapp.com",
  projectId: "todo-ultof-com",
  storageBucket: "todo-ultof-com.appspot.com",
  messagingSenderId: "831728805969",
  appId: "1:831728805969:web:1987a533530f895d993070",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
