import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   console.log(auth?.currentUser?.email);

  const signInHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("Something Went Wrong: " + err);
    }
  };

  const sighInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log("Something Went Wrong: " + err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("Something Went Wrong: " + err);
    }
  };
 
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signInHandler}>Sign in</button>
      <button onClick={sighInWithGoogle}>Sign In With Google</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Auth;
