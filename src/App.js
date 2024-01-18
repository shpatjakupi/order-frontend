import React from "react";
import Home from "pages/Home";
import Navbar from "components/headers/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "pages/Order";
import { UserProvider } from '../src/context/usectx';
import Admin from "pages/admin/Admin";
import TidligereOrdrer from "components/admin/TidligereOrdrer";
import AktiveOrdrer from "components/admin/AktiveOrdrer";

export default function App() {

  return (
    <div>
      <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Admin" element={<Admin />}>
            <Route path="aktive-ordrer" element={<AktiveOrdrer />} />
            <Route path="tidligere-ordrer" element={<TidligereOrdrer />} />
          </Route>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}
