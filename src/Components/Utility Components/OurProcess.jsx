import React from "react";
import "./ChooseUs.css";
import Fade from "react-reveal/Fade";
import "./ChooseUs.css";
import CanvasWebDev from "../CoursePages/CanvasWebDev";
import ProcessImg from "../../Assets/process.jpg";
const OurProcess = () => {
  return (
    <Fade bottom duration={1000}>
      <section className="px-5 py-16 bg-secondary flex justify-center items-center">
        <div className="bg-white w-full mdsm:w-[80%] rounded-3xl shadow-inner-custom px-4 mdsm:px-8 py-5 mdsm:py-12 flex items-start mdsm:items-center justify-center flex-col-reverse mlg:flex-row gap-10 ">
          <div className="process-img  w-[40%]">
            <img src={ProcessImg} alt="" className="rounded-3xl" />
          </div>
          <div className="content-Faqs w-[100%] mdsm:w-[60%]">
            <div className="para-choosUs">
              <div className="main-heading heading-container text-left">
                <h1 className="pb-8 pt-3 font-bold text-xl mdsm:text-3xl">
                  Our process.
                </h1>
              </div>
              <p className="text-lg font-thin">
                At Programmers Marathon, our process is designed to provide you
                with high-quality education across a variety of courses, with a
                special focus on our professional craft: front-end web
                development. While we excel in this area, we also offer a
                diverse range of courses, including e-commerce, video editing,
                graphic design, and more.
                <br />
                <br />
                No matter where you're located, our online classes are
                accessible to everyone. We are committed to ensuring you get the
                most out of your learning experience, providing support and
                resources to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default OurProcess;
