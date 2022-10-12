import React from 'react'
import "./index.css"
import Home from "./routes/Home";
import Services from "./routes/Services";
import Company from "./routes/Company";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/our-company" element={<Company />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
