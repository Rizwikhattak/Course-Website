import React from "react";
import "./ChooseUs.css";
import Fade from "react-reveal/Fade";
import "./ChooseUs.css";
import CanvasWebDev from "../CoursePages/CanvasWebDev";

const Faqs = () => {
  return (
    <Fade bottom duration={1000}>
      <section className="px-5 py-16 bg-[#242424] flex justify-center items-center">
        <div className="bg-white w-full mdsm:w-[80%] rounded-3xl shadow-inner-custom px-4 mdsm:px-8 py-5 mdsm:py-12 flex items-start mdsm:items-center justify-center flex-col-reverse mlg:flex-row gap-10">
          <div className="Faqs-img w-[100%] mdsm:w-[40%] h-full">
            <CanvasWebDev CanvasData={questions} check={false} />
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

const questions = [
  {
    title: "Are your courses free?",
    type: 1,
    courseState: false,
    content:
      "Yes, our courses are free to join. However, if you wish to receive a proper certification, there is a fee.",
  },
  {
    title: "What prerequisites are required to join the courses?",
    type: 2,
    courseState: false,
    content:
      "No prior experience is necessary! Our courses are designed for beginners, though basic familiarity with computers is helpful. We start from the fundamentals and guide you step-by-step.",
  },
  {
    title: "How do I enroll in a course?",
    type: 3,
    courseState: false,
    content:
      "You can enroll in our courses by visiting our website, selecting the course you're interested in, and filling out the registration form. Once completed, you'll receive an email with further instructions.",
  },
  {
    title: "What tools and software do I need?",
    type: 4,
    courseState: false,
    content:
      "All you need is a computer with internet access and a modern web browser. We'll guide you on how to install any additional software or tools required for the course.",
  },
  {
    title: "How long does it take to complete a course?",
    type: 5,
    courseState: false,
    content:
      "The course period is 3 months, with 5 sessions dedicated to each topic. You'll learn at a steady pace with guidance and support from our instructors.",
  },
];

export default Faqs;
