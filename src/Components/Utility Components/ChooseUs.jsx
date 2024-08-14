import React from "react";
import "./ChooseUs.css";
import whyChooseUseImg from "../../Assets/whyChooseUsImg.jpg";
import Fade from "react-reveal/Fade";
const ChooseUs = () => {
  return (
    <Fade bottom duration={1000}>
      <section className="px-5 py-16 bg-secondary flex justify-center items-center">
        <div className="bg-white w-full mdsm:w-[80%] rounded-3xl shadow-inner-custom px-5 mdsm:pl-6 mdsm:pr-28 py-12 flex justify-center items-center flex-col-reverse mlg:flex-row gap-10">
          <div className="chooseUs-img w-[100%] mdsm:w-[40%]">
            <img
              src={whyChooseUseImg}
              alt=""
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="content-chooseUs w-[100%] mdsm:w-[60%]">
            <div className="main-heading heading-container">
              <h1 className="pb-12 font-bold text-xl mdsm:text-3xl">
                Why choose Us
              </h1>
            </div>
            <div className="para-choosUs">
              <p className="text-lg font-thin">
                Our Programmers Marathon Team offers free, top-notch courses
                across various disciplines, led by experienced professionals. We
                provide comprehensive support and continuous opportunities to
                help you excel. Our mission is to empower learners to skyrocket
                their skills and become advanced in their fields. Join us to
                elevate your journey with Programmers Marathon!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default ChooseUs;
