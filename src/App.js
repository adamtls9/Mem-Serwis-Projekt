import React from "react";
import Home from "./components/Home";
import Regular from "./components/Regular";
import Hot from "./components/Hot";
import { Route, Routes, Link } from "react-router-dom";


function App() {
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hot">Hot</Link>
          </li>
          <li>
            <Link to="/regular">Regular</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="/regular" element={<Regular />} />
      </Routes>
    </>
  );
}

export default App;
