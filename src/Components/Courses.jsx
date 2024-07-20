import React from "react";
import { FaComputer } from "react-icons/fa6";
import { LuPaintBucket } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
const Courses = () => {
  return (
    <section className="courses-page w-full h-full p-5 bg-[#242424] text-white">
      <div className="our-course-category-section">
        <div className="main-heading">
          <h1>Our Course Category</h1>
        </div>
        <div className="course-category-buttons flex justify-around items-center">
          {buttonsData.map((currElem, currIndex) => (
            <button key={currIndex} className={`btn-${currIndex + 1}`}>
              <span>{<currElem.icon className="inline-block" />}</span>{" "}
              {currElem.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const buttonsData = [
  {
    text: "Front-End Web Dev",
    icon: FaComputer,
  },
  {
    text: "Graphics Designing",
    icon: LuPaintBucket,
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
