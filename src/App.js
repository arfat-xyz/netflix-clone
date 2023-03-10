import React, { useEffect, useState } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import RequireAuth from "./RequireAuth";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
function App() {
  const [user, loading, error] = useIdToken(auth);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <HomeScreen />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfileScreen />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
