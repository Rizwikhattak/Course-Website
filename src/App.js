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
import Products from "./Components/Products";
import Courses from "./Components/Courses";
import ChooseUs from "./Components/ChooseUs";
import WebDevCoursePage from "./Components/CoursePages/WebDevCoursePage";
const App = () => {
  return (
    <>
      <Router>
        <HomeNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<ChooseUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/WebDev" element={<WebDevCoursePage />} />
        </Routes>

        {/* <Cards /> */}
        {/* <Services /> */}
        {/* <Products />
        <ContactUs /> */}
      </Router>
    </>
  );
};

export default App;
