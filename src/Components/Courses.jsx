import React, { useState } from "react";
import { FaComputer } from "react-icons/fa6";
import { LuPaintBucket } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import progMainAboutImg from "../Assets/progAboutMainImg.jpg";
import "./Courses.css";
import DialogueApplyCourse from "./Utility Components/DialogueApplyCourse";
const Courses = () => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [courseIndex, setCourseIndex] = useState(0);

  function HandleOpenDialogueBox(val) {
    setOpenDialogue(val);
  }

  return (
    <section className="courses-page w-full h-full p-5 bg-[#242424] text-white flex justify-center items-center">
      <div className="our-course-category-section shadow-custom bg-white  rounded-3xl text-black p-5 w-full lgmd:w-[90%] slg:w-[80%] ">
        <div className="main-heading heading-container">
          <h1 className="text-center pt-5 pb-16 font-bold text-3xl">
            Our Course Category
          </h1>
        </div>
        <div className="course-category-buttons-container overflow-x-auto lgmd:overflow-x-hidden">
          <div className="course-category-buttons flex justify-around items-center ">
            {buttonsData.map((currElem, currIndex) => (
              <button
                key={currIndex}
                className={`btn-${
                  currIndex + 1
                } relative font-semibold px-4 py-2 mx-4 transition-all duration-300 ${
                  courseIndex === currIndex
                    ? "active-button"
                    : "hover:text-[#1e8947] before:transition-all before:content-[''] before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:opacity-0 before:rounded-lg hover:before:bg-gradient-to-r hover:before:from-primary hover:before:to-green-950 hover:before:w-10/12 hover:before:opacity-100"
                }`}
                onClick={() => setCourseIndex(currIndex)}
              >
                <span>{<currElem.icon className="inline-block mr-2" />}</span>
                {currElem.text}
                {courseIndex === currIndex && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] bg-black transition-all duration-500 ease-out transform -translate-x-1/2 w-10/12"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="clicked-button-course-content flex items-center justify-between gap-5 pl-5 pr-0 slg:pr-5 py-16 flex-col lgmd:flex-row ">
          <div className="clicked-content w-full flex-grow slg:flex-grow-0">
            <div className="main-head-clicked flex items-center">
              <h1 className="font-semibold text-2xl py-10 pr-10">
                {buttonsData[courseIndex].text}
              </h1>
              <h1
                className={` ${
                  buttonsData[courseIndex].availaiblitiy == "Availaible"
                    ? "bg-[#1e8947]"
                    : "bg-red-600"
                } px-10 py-2 rounded-lg text-white`}
              >
                {buttonsData[courseIndex].availaiblitiy}
              </h1>
            </div>
            <p className="">{buttonsData[courseIndex].description}</p>

            <div className="quote-container">
              <blockquote>{buttonsData[courseIndex].quotation}</blockquote>
              <cite>{buttonsData[courseIndex].cite}</cite>
            </div>
            <div className="apply-course-btn py-3">
              <button
                className=" w-42 h-12 text-center bg-[#1e8947] text-white rounded-xl hover:bg-white hover:text-[#1e8947] hover:border-[1px] hover:border-[#1e8947] transition duration-300 ease-in-out flex justify-center items-center p-5 gap-2"
                onClick={() => HandleOpenDialogueBox(true)}
              >
                <span className="inline-block">Apply Here</span>
                <span className="">
                  <FaRegHandPointer className="inline-block" />
                </span>
              </button>
            </div>
          </div>
          <div className="clicked-images w-full flex-grow slg:flex-grow-[2]">
            <div
              className="about-img-1 pl-5 w-full"
              style={{
                clipPath: "inset(5% 20% 15% 10% round 5% 20% 0 10%)",
              }}
            >
              <img src={progMainAboutImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {openDialogue && (
          <DialogueApplyCourse HandleOpenDialogueBox={HandleOpenDialogueBox} />
        )}
      </div>
    </section>
  );
};

const buttonsData = [
  {
    text: "Front-End Web Dev",
    icon: FaComputer,
    description:
      "Become a proficient Front-End Web Developer in just 4.5 months. Our comprehensive curriculum includes HTML5, CSS3, Tailwind CSS, JavaScript, and React JS. Equip yourself with the essential skills to create stunning and responsive websites. Join us and start your journey to becoming a front-end expert today!",
    quotation:
      "The presentation by Programmers Marathon Institute was easy to understand, and the quality was exceptional.",
    cite: "Riz",
    availaiblitiy: "Availaible",
  },
  {
    text: "Graphics Designing",
    icon: LuPaintBucket,
    description:
      "Unlock your creativity with our Professional Graphic Design Course. Master essential tools and techniques to create stunning visual content. From typography to digital illustration, we’ll equip you with the skills to produce professional-quality designs. Elevate your craft and bring your artistic visions to life!",
    quotation:
      "The presentation by Programmers Marathon Institute was easy to understand, and the quality was exceptional.",
    cite: "Riz",
    availaiblitiy: "Not Availaible",
  },
  {
    text: "Coming Soon",
    icon: FaRegCircleQuestion,
  },
  {
    text: "Coming Soon",
    icon: FaRegCircleQuestion,
  },
];

export default Courses;
