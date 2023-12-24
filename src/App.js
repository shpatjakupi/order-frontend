import React from "react";
import Home from "pages/Home";
import Navbar from "components/headers/Navbar";
import Footer from "components/footers/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "pages/Order";
import { UserProvider } from '../src/context/usectx';

export default function App() {

  return (
    <div>
      <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </Router>
      <Footer domain="Vanløsepizza" />
      </UserProvider>
    </div>
  );
}
