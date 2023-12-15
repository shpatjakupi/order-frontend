import React from "react";
import Home from "pages/Home";
import Navbar from "components/headers/Navbar";
import Footer from "components/footers/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer domain="Vanløsepizza" />
    </>
  );
}
