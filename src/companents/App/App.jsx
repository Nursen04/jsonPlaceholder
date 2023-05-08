import React from "react";
import Cards from "../Cards/Cards";
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "../Photos/Photos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/product/:num" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
