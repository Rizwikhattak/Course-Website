import React from "react";
import Button from "./Utility Components/Button";
import homeImageMain from "../Assets/HomeImgMain.png";
import homeImage_1 from "../Assets/HomeImg_1.png";
import { FaCirclePlay } from "react-icons/fa6";
import "./Home.css";
import About from "./About";
import ChooseUs from "./ChooseUs";
import Courses from "./Courses";

const Home = () => {
  return (
    <>
      <section className="Home-page text-white bg-[#242424] h-full w-full flex px-5 mdsm:px-14 py-24 gap-x-5 border-b-2 border-gray-600">
        <div className="home-content pl-4 w-[100%] flex-grow-[2]">
          <div className="stick-content inline-block">
            <div
              className="stick bg-white text-[#1e8947]"
              style={{
                clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
              }}
            >
              <h1 className="flex bg-white items-center px-4 py-2 relative mr-4">
                <span className="h-3 w-3 bg-[#1e8947] rounded-full mr-3 font-semibold"></span>
                Welcome to Programmer's Marathon
              </h1>
            </div>
          </div>
          <div>
            <div className="left-home-content py-10">
              <h1 className=" text-2xl mdsm:text-5xl font-bold py-5">
                Easiest-<span className="text-[#1e8947]">Way</span> to Become a{" "}
                <span className="text-[#1e8947]">Programmer.</span>
              </h1>
              <p className="text-md mdsm:text-xl py-5">
                We have enlisted the course content in the most impressive form
                for our studnets to understand the concepts from scratch.
              </p>
              <div className="buttons-home py-10 flex gap-x-10 relative">
                <button>
                  <Button content="Contact Us" a />
                </button>
                <button className="ripple-button">
                  <FaCirclePlay className="w-14 h-14 bg-[#1e8947] text-white rounded-full hover:bg-white hover:text-[#1e8947] transition duration-300 ease-in-out relative" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="home-images w-100% flex-grow relative">
        <div className="img-home-2 absolute right-0 top-0 z-10">
          <img src={homeImage_1} alt="" className="w-40" />
        </div>
        <div className="img-home-1 hidden mlg:block h-full z-20 w-full relative">
          <img src={homeImageMain} alt="" className="w-full" />
          <button className="px-[1.69rem] py-[0.79rem] rounded-2xl bg-[#1e8947] content-center text-center hover:bg-opacity-80 hover:bg-white hover:text-[#1e8947]  transition duration-300 ease-in-out absolute left-0 bottom-[33%] z-30 bg-opacity-80">
            25,200 Clients Solution
          </button>
        </div>
      </div> */}
      </section>
      <About />
      <ChooseUs />
      <Courses />
    </>
  );
};

export default Home;
