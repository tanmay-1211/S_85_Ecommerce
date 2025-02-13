import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignUpPage} from "./Routess.js"// Import fixed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
