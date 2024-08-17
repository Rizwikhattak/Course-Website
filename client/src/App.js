import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./Components/Navbar/HomeNavbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ChooseUs from "./Components/Utility Components/ChooseUs";
import WebDevCoursePage from "./Components/CoursePages/WebDevCoursePage";
import RegistrationForm from "./Components/RegistrationPage/RegistrationForm";
import Footer from "./Components/Footer/Footer";
import CourseMaterial from "./Components/CourseMaterial/CourseMaterial";
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
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/CourseMaterial" element={<CourseMaterial />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
