import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loading from "./Loading";
import "./Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  const [user, loading] = useAuthState(auth);
  const transitionNavBar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  }, []);
  if (loading) return <Loading />;
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src="https://i.ibb.co/7Jp6jW6/netflix-logo-arfat-xyz.png"
          alt=""
          className="nav__logo"
        />
        <img src={user && user?.photoURL} alt="" className="nav__avatar" />
      </div>
    </div>
  );
};

export default Nav;
