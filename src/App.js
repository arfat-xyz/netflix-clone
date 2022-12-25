import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  console.log(useSelector(selectUser));
  // const user = auth.currentUser;
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const userAuth = auth.currentUser;
    if (userAuth) {
      setLoading(true);
      dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    } else {
      dispatch(logout);
    }
    setLoading(false);
  }, [dispatch]);
  loading && <h1>Loding...</h1>;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route index element={<LoginScreen />} />
          ) : (
            <Route index element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
