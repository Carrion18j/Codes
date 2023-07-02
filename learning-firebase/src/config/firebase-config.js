import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo95wquz2FaxB_W32p2-0ZRZWKUSlWzhY",
  authDomain: "learningfirebase-df599.firebaseapp.com",
  projectId: "learningfirebase-df599",
  storageBucket: "learningfirebase-df599.appspot.com",
  messagingSenderId: "300982599148",
  appId: "1:300982599148:web:f68bcf3d0f2e9c848a14c9",
  measurementId: "G-E1TJ3XHQH6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)