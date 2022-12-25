import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  const user = null;
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
