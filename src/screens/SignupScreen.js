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
  const [signUpValue, setSignUpValue] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, signInUser, loading] =
    useSignInWithEmailAndPassword(auth);
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
      .then((authUser) => {
        setUser(authUser);
        console.log(authUser);
      })
      .catch((e) => alert(e.message));
  };
  console.log(user);
  if (loading) return <Loading />;
  if (user) return <Navigate to="/" replace />;
  return (
    <div className="signupScreen">
      <form onSubmit={signUpValue ? register : signIn}>
        <h1>{signUpValue ? "Sign Up" : "Sign In"}</h1>

        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        {signUpValue ? (
          <button
            type="submit"
            // onSubmit={register}
          >
            Register
          </button>
        ) : (
          <button
            type="submit"
            //  onSubmit={signIn}
          >
            Sign In
          </button>
        )}
        {signUpValue ? (
          <h4>
            <span>Already registered? </span>{" "}
            <span onClick={() => setSignUpValue(false)}>Login</span>
          </h4>
        ) : (
          <h4>
            <span>New to Netflix?</span>{" "}
            <span onClick={() => setSignUpValue(true)}>Sign Up now.</span>
          </h4>
        )}
      </form>
    </div>
  );
};

export default SignupScreen;
