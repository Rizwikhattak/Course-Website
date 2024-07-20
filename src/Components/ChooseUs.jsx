import React from "react";
import "./ChooseUs.css";
import whyChooseUseImg from "../Assets/whyChooseUsImg.jpg";
const ChooseUs = () => {
  return (
    <section className="px-5 py-16 bg-[#242424] flex justify-center items-center">
      <div className="bg-white w-full mdsm:w-[80%] rounded-3xl shadow-custom px-12 mdsm:px-28 py-12 flex justify-center items-center flex-col-reverse mlg:flex-row gap-10">
        <div className="chooseUs-img">
          <img
            src={whyChooseUseImg}
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
        <div className="content-chooseUs">
          <div className="main-heading heading-container">
            <h1 className="pb-12 font-bold text-xl mdsm:text-3xl">
              Why choose Us
            </h1>
          </div>
          <div className="para-choosUs">
            <p className="text-lg font-thin">
              Our Programmers Marathon Team offers free, top-notch courses
              across various disciplines, led by experienced professionals. We
              provide comprehensive support and continuous opportunities to help
              you excel. Our mission is to empower learners to skyrocket their
              skills and become advanced in their fields. Join us to elevate
              your journey with Programmers Marathon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
