import React, { useRef, useState } from "react";
import "./SignupScreen.css";
// const auth = getAuth();
import { auth } from "../firebase";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import Loading from "../Loading";

const SignupScreen = () => {
  const [user, setUser] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, signInUser, loading] =
    useSignInWithEmailAndPassword(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const register = async (e) => {
    e.preventDefault();
    // console.log(auth);

    createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => setUser(authUser))
      .catch((e) => alert(e.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => setUser(authUser))
      .catch((e) => alert(e.message));
  };
  if (loading || updating) return <Loading />;
  if (user) return <Navigate to="/" replace />;
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
