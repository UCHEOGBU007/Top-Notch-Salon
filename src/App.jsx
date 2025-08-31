import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Appointment from "./Components/Appointment.jsx";
import Navigation from "./Components/Navigation.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <hr />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Appointment" element={<Appointment />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
