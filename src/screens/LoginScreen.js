import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import Loading from "../Loading";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(true);
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (user) return <Navigate to="/" replace />;
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://i.ibb.co/7Jp6jW6/netflix-logo-arfat-xyz.png"
          alt=""
          className="loginScreen__logo"
        />
        <button
          className="loginScreen__button"
          onClick={() => setSignIn(!signIn)}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Movies TV, Shows and More.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership .
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" name="" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
