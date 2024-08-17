import React, { useState } from "react";
import Button from "../Utility Components/Button";

import "./Home.css";
import About from "../About/About";
import ChooseUs from "../Utility Components/ChooseUs";
import Courses from "../Utility Components/Courses";
import VisionAndMission from "../Utility Components/VissionAndMission";
import Faqs from "../Utility Components/Faqs";
import Motive from "../Utility Components/Motive";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import AutoPlayVideo from "../Utility Components/AutoPlayVideo";
import HomeBgImg from "../../Assets/HomeBgImg.png";
import topRightBlueImg from "../../Assets/1.svg";
import BigRightBlueImg from "../../Assets/2.svg";
import OurProcess from "../Utility Components/OurProcess";
const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <section
        className="Home-page text-white bg-secondary h-full w-full flex items-center flex-col mdsm:flex-row px-2  mdsm:px-14 py-24 gap-x-5 border-b-2 border-gray-600 "
        style={{
          backgroundImage: `url(${HomeBgImg})`, // Ensure the image is correctly referenced
          backgroundSize: "cover", // Cover the entire container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
      >
        <div className="background-blue-img z-30 absolute top-0 right-0 pointer-events-none">
          <img src={topRightBlueImg} alt="" />
        </div>
        <div className="background-blue-img absolute top-[20%] right-0 z-30 pointer-events-none">
          <img src={BigRightBlueImg} alt="" />
        </div>
        <div className="home-content pl-4 mdsm:w-[60%] w-[100%] flex-grow-[2]">
          <div className="stick-content flex flex-wrap items-center gap-5">
            <div
              className="stick bg-white text-primary"
              style={{
                clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
              }}
            >
              <h1 className="flex bg-white items-center pl-2 mdsm:px-4 py-2 relative mr-2 mdsm:mr-4">
                <span className="h-3 w-3 bg-primary rounded-full mr-1 mdsm:mr-3 font-semibold"></span>
                Welcome to Programmer's Marathon
              </h1>
            </div>
            <h1 className="bg-white p-2  text-primary">
              Your Gateway to Mastering Programming
            </h1>
          </div>
          <div>
            <div className="left-home-content py-5 mdsm:py-10">
              <h1 className="text-xl">Our First Course Provides:</h1>
              <h1 className=" text-xl mdsm:text-4xl font-bold py-5">
                Easiest-<span className="text-primary">Way</span> to Become a{" "}
                <span className="text-primary">Programmer.</span>
              </h1>
              <p className="text-md mdsm:text-xl py-2 mdsm:py-5">
                Our course content is designed to be easily understood, guiding
                students from the basics to advanced concepts with clarity.
              </p>
              <div className="buttons-home py-2 mdsm:py-10 flex gap-x-10 relative">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  delay={100}
                >
                  <Button content="Contact Us" a />
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] mdsm:w-[40%] z-40">
          <h1 className="text-xl font-semibold py-4">What's New</h1>
          <AutoPlayVideo />
        </div>
      </section>
      <About />
      <Courses />

      <ChooseUs />
      <VisionAndMission />
      <OurProcess />

      <Faqs />

      <Motive />
    </>
  );
};

export default Home;
