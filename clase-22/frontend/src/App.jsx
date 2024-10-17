import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Login.jsx";
import Register from "./Screens/Register/Register.jsx";

import "./global.css"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
