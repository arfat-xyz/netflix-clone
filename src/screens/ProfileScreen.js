import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "../Loading";
import Nav from "../Nav";
import "./ProfileScreen.css";
const ProfileScreen = () => {
  const [user, authLoading] = useAuthState(auth);
  const [signOut, signOutLoading, error] = useSignOut(auth);

  if (authLoading || signOutLoading) return <Loading />;
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <div>
            <img src={user && user?.photoURL} alt="" />
          </div>
          <div className="pofileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={async () => await signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
