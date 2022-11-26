import React from "react";
import "./priceTracker/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Details from "./page/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
