import React from "react";
import CanvasWebDev from "../CoursePages/CanvasWebDev";
import BgRightGreenImg from "../../Assets/5.svg";
const Faqs = () => {
  return (
    <section className="Faqs text-white z-40 bg-secondary h-full w-full flex items-center flex-col mdsm:flex-row px-2 mdsm:px-14 py-24 gap-x-5 border-b-2 border-gray-600 relative">
      <div className="bg-green-img absolute top-0 right-0 z-30 pointer-events-none">
        <img src={BgRightGreenImg} alt="" />
      </div>
      <div className="Faqs-img w-full h-full">
        <CanvasWebDev CanvasData={questions} check={false} />
      </div>
    </section>
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
