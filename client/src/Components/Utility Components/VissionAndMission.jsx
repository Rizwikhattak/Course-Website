import React from "react";
import "./ChooseUs.css";
import VissionAndMissionImg from "../../Assets/Vission.jpg";
import "./ChooseUs.css";
import Fade from "react-reveal/Fade";
import BgGreenLeftImg from "../../Assets/4.svg";
const VissionAndMission = () => {
  return (
    <Fade bottom duration={1000}>
      <section className="px-5 py-16 bg-secondary  flex justify-center items-center relative">
        <div className="bg-green-img absolute top-0 left-0 z-30">
          <img src={BgGreenLeftImg} alt="" />
        </div>
        <div className="bg-white w-full mdsm:w-[80%] rounded-3xl shadow-inner-custom px-4 mdsm:px-8  py-5 mdsm:py-12 flex items-start mdsm:items-center justify-start mdsm:justify-center flex-col-reverse mlg:flex-row gap-10 z-50">
          <div className="vissionAndMission-imgn mdsm:w-[40%] w-[100%] h-full">
            <img
              src={VissionAndMissionImg}
              alt=""
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="content-vissionAndMission w-[100%] mdsm:w-[60%]">
            <div className="para-choosUs">
              <div className="main-heading heading-container text-left">
                <h1 className="pb-8 pt-3 font-bold text-xl mdsm:text-3xl">
                  Our Vission
                </h1>
              </div>
              <p className="text-lg font-thin">
                At The Programmer's Marathon Team, our vision is to provide an
                up-to-date and comprehensive progress roadmap for our students,
                enabling them to achieve their skill sets with ease. We believe
                in the power of free education and are committed to spreading
                our word, "Free Education, Free IT."
              </p>
              <h3>
                All our courses and classes are accessible at no cost, ensuring
                that education remains a fundamental right for everyone.
              </h3>
              <div className="main-heading heading-container">
                <h1 className="pb-8 pt-7 font-bold text-xl mdsm:text-3xl">
                  Our Mission
                </h1>
              </div>
              <p className="text-lg font-thin">
                While our educational content remains free, to enhance our
                institute's offerings, we will introduce a minimal certification
                fee. This fee will help us improve resources and provide a
                better learning experience.This approach ensures free education
                for dedicated learners. Your support and passion will be
                recognized. Together, we can achieve great things.
                <br />
              </p>

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

export default VissionAndMission;
