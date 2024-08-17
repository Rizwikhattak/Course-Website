import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import { LuPaintBucket } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import FrontEndDevelopment from "../../Assets/progAboutMainImg.jpg";
import graphicsDesining from "../../Assets/CoursesImg_2.jpg";
import "./Courses.css";
import Fade from "react-reveal/Fade";
import CardsImg from "../../Assets/CardsImg.png";
import BgGreenImg from "../../Assets/3.svg";
const Courses = () => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [courseIndex, setCourseIndex] = useState(0);

  function HandleOpenDialogueBox(val) {
    setOpenDialogue(val);
  }

  return (
    <Fade bottom duration={1000}>
      <section className="courses-page w-full h-full p-5 pb-16 bg-secondary text-white flex justify-center items-center z-40 relative">
        <div className="green-bg-img absolute top-[20%] right-0">
          <img src={BgGreenImg} alt="" />
        </div>
        <div
          className="our-course-category-section   
          rounded-3xl text-black p-5 w-full lgmd:w-[90%] slg:w-[80%] bg-white "
        >
          <div className="main-heading heading-container">
            <h1 className=" text-left mdsm:text-center pt-5 pb-16 font-semibold text-[28px] mdsm:text-3xl">
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
                      : "hover:text-primary before:transition-all before:content-[''] before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:opacity-0 before:rounded-lg hover:before:bg-gradient-to-r hover:before:from-primary hover:before:to-green-950 hover:before:w-10/12 hover:before:opacity-100"
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
          <div className="clicked-button-course-content flex items-center justify-between gap-5 pl-5 pr-0 slg:pr-5 py-2 flex-col lgmd:flex-row ">
            <div className="clicked-content w-full flex-grow slg:flex-grow-0">
              <div className="main-head-clicked flex flex-col  mdsm:flex-row gap-2 items-start mdsm:items-center py-10 pr-10">
                <h1 className="font-semibold text-2xl ">
                  {buttonsData[courseIndex].text}
                </h1>
                <h1
                  className={` ${
                    buttonsData[courseIndex].availaiblitiy == "Availaible"
                      ? "bg-primary px-10 py-2"
                      : "bg-red-600 px-5 py-2"
                  } px-10 py-2 rounded-lg text-white`}
                >
                  {buttonsData[courseIndex].availaiblitiy}
                </h1>
              </div>
              <p className="">{buttonsData[courseIndex].description}</p>

              <div className="quote-container text-black">
                <blockquote>{buttonsData[courseIndex].quotation}</blockquote>
                <cite>{buttonsData[courseIndex].cite}</cite>
              </div>
              {buttonsData[courseIndex].availaiblitiy === "Availaible" && (
                <div className="apply-course-btn py-3 flex gap-3 flex-wrap">
                  <Link to="/WebDev">
                    <button
                      className=" w-42 h-12 text-center bg-primary text-white rounded-xl hover:bg-white hover:text-primary hover:border-[1px] hover:border-primary transition duration-300 ease-in-out flex justify-center items-center p-5 gap-2"
                      onClick={() => HandleOpenDialogueBox(true)}
                    >
                      <span className="inline-block">Apply Here</span>
                      <span className="">
                        <FaRegHandPointer className="inline-block" />
                      </span>
                    </button>
                  </Link>
                  <Link to="/CourseMaterial">
                    <button
                      className=" w-42 h-12 text-center bg-primary text-white rounded-xl hover:bg-white hover:text-primary hover:border-[1px] hover:border-primary transition duration-300 ease-in-out flex justify-center items-center p-5 gap-2"
                      onClick={() => HandleOpenDialogueBox(true)}
                    >
                      <span className="inline-block">Course Material</span>
                      <span className="">
                        <FaRegHandPointer className="inline-block" />
                      </span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="clicked-images w-full flex-grow slg:flex-grow-[2]">
              <div
                className="about-img-1 pl-5 w-full hidden mdsm:inline-block"
                style={{
                  clipPath: "inset(5% 20% 15% 10% round 5% 20% 0 10%)",
                }}
              >
                <img
                  src={buttonsData[courseIndex].img}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
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
    img: FrontEndDevelopment,
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
    img: graphicsDesining,
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
