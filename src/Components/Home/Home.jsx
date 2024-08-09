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

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <section className="Home-page text-white bg-[#242424] h-full w-full flex items-center flex-col mdsm:flex-row px-2 mdsm:px-14 py-24 gap-x-5 border-b-2 border-gray-600">
        <div className="home-content pl-4 mdsm:w-[60%] w-[100%] flex-grow-[2]">
          <div className="stick-content flex flex-wrap items-center gap-5">
            <div
              className="stick bg-white text-[#1e8947]"
              style={{
                clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
              }}
            >
              <h1 className="flex bg-white items-center pl-2 mdsm:px-4 py-2 relative mr-2 mdsm:mr-4">
                <span className="h-3 w-3 bg-[#1e8947] rounded-full mr-1 mdsm:mr-3 font-semibold"></span>
                Welcome to Programmer's Marathon
              </h1>
            </div>
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                opacity: 0.5,
              }}
            >
              an online institute
            </h1>
          </div>
          <div>
            <div className="left-home-content py-5 mdsm:py-10">
              <h1 className="text-xl"> Our first Course will provide,</h1>
              <h1 className=" text-xl mdsm:text-4xl font-bold py-5">
                Easiest-<span className="text-[#1e8947]">Way</span> to Become a{" "}
                <span className="text-[#1e8947]">Programmer.</span>
              </h1>
              <p className="text-md mdsm:text-xl py-2 mdsm:py-5">
                We have enlisted the course content in the most impressive form
                for our studnets to understand the concepts from scratch.
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
        <div className="w-[100%] mdsm:w-[40%]">
          <h1 className="text-xl font-semibold py-4">What's New</h1>
          <AutoPlayVideo />
        </div>
      </section>
      <Courses />

      <About />
      <ChooseUs />
      <VisionAndMission />
      <Faqs />
      <Motive />
    </>
  );
};

export default Home;
