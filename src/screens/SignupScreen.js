import React, { useRef } from "react";
import "./SignupScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// const auth = getAuth();
import { auth } from "../firebase";
const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    console.log(auth);
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((e) => alert(e.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => console.log(authUser))
      .catch((e) => alert(e.message));
  };
  return (
    <div className="signupScreen">
      <form action="">
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          name=""
          placeholder="Email"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          name=""
          placeholder="Password"
          required
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span>New to Netflix?</span>{" "}
          <span onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
