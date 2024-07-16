import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./Components/HomeNavbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cards from "./Components/Cards";
import Services from "./Components/Services";
const App = () => {
  return (
    <>
      <Router>
        <HomeNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <About />
        <Cards />
        <Services />
        <ContactUs />
      </Router>
    </>
  );
};

export default App;
