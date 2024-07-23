import React from "react";
import RegistrationCard from "./RegistrationCard";
import CanvasWebDev from "./CanvasWebDev";
import webDev_1 from "../../Assets/WebDev_1.jpg";
import { CgSandClock } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { TiTick } from "react-icons/ti";

const WebDevCoursePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="web-dev-page h-full w-full flex justify-between bg-[#242424] p-5 ">
      <div className="web-dev-content-data p-5 pl-20 text-white h-full w-[60%]">
        <div className="content-first-section-course flex flex-col gap-y-3 pb-10">
          <h1 className="font-semibold text-xl">
            Getting Started with Front-End Web Development
          </h1>
          <p>
            Cover the fundamental concepts, techniques, and skills required to
            <br />
            build and implement effective front-end web development projects.
          </p>
        </div>
        <div className="course-image-section w-full h-[57%]">
          <img src={webDev_1} alt="" className="h-[100%] w-full" />
        </div>
        <div className="course-second-section flex justify-between items-center py-10 text-white">
          {courseContent.map((currElem, currIndex) => {
            return (
              <div
                key={currIndex}
                className="course-second-section-1 flex items-center"
              >
                <div className="cr">
                  <div className="course-content">
                    <p className=" font-thin text-base flex items-center gap-x-1">
                      <span className="">{<currElem.icon className="" />}</span>
                      <span>{currElem.title}</span>
                    </p>
                    <h1 className="font-semibold text-lg">{currElem.para}</h1>
                  </div>
                </div>
                {currIndex != courseContent.length - 1 && (
                  <div className=" border-r-[1px] h-14 border-white w-10"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="course-third-section">
          <div className="course-btns flex justify-around py-3 px-5 bg-slate-500">
            {["OverView", "Start Dates", "Requirements"].map(
              (text, currIndex) => {
                return (
                  <button
                    key={currIndex}
                    className="text-white hover:text-green-300 transition duration-300 ease-in-out"
                    onClick={() => scrollToSection(text.replace(/\s+/g, ""))}
                  >
                    {text}
                  </button>
                );
              }
            )}
          </div>
          <div className="course-fourth-section pl-5 py-10" id="OverView">
            <h1 className="py-5 font-semibold text-3xl">
              Learn How to Beome a Web Developer
            </h1>
            <p>
              Learn to plan and design successful front-end web projects. This
              four-and-a-half-month course covers creating stunning, responsive
              websites through engaging video presentations and practical
              activities.
              <br />
              <br />
              You’ll cover the fundamental concepts, techniques, and skills
              required to develop, plan, and implement effective front-end web
              projects.
              <br />
              <br />
              Identify the core principles and purpose of different front-end
              technologies. You’ll start by understanding the core principles
              and purpose of front-end development and key considerations for
              optimal performance across various technologies.
              <br />
              <br />
              This includes the benefits of HTML5 for structuring content, CSS3
              and Tailwind CSS for styling, and JavaScript and React JS for
              interactivity and dynamic functionality.
              <br />
              <br />
              You’ll use the concept of user experience (UX) to engage users
              effectively, distinguish between design strategies, and understand
              key steps for setting up an effective front-end project.
            </p>
          </div>
          <div className="course-fifth-section pl-5 py-5">
            <h1 className="font-semibold py-5 text-3xl">
              What will you achieve?
            </h1>
            <div className="content-ul">
              <ul className="text-white list-inside space-y-3">
                {liContent.map((text, index) => (
                  <li key={index} className="flex items-center gap-x-2">
                    <span>
                      <TiTick className="w-5 h-5" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="course-sixth-section w-full h-full">
          <CanvasWebDev />
        </div>
        <div className="course-seventh-section w-full pl-5" id="StartDates">
          <div className="course-seventh-content">
            <h1 className="font-semibold text-3xl py-5">
              When Would You Like To Start?
            </h1>
            <p>
              Start straight away and join a global classroom of learners. If
              the course hasn’t started yet you’ll see the future date listed
              below.
            </p>
          </div>
          <div className="course-seventh-date w-full flex justify-between items-center my-5 border-l-4 border-l-primary border-y-[1px] border-y-white pl-6 py-2">
            <div className="date-content-icon flex gap-x-2 items-center">
              <span>
                <SlCalender className="w-6 h-6" />
              </span>
              <h1>Available Now</h1>
            </div>
            <div className="date-btn">
              <button className=" rounded-md py-1 px-5 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="web-dev-reg-page sticky w-[40%] ">
        <RegistrationCard />
      </div>
    </section>
  );
};

const liContent = [
  "Identify core front-end principles",
  "Ensure optimal web performance",
  "Apply UX principles effectively",
  "Key steps for web projects",
  "Components of responsive design",
  "JavaScript frameworks for interactivity",
  "Importance of CSS strategies",
  "Key web design components",
  "Accessibility and performance optimization",
  "Role of development tools",
  "Core front-end strategy components",
  "Steps for successful projects",
];

const courseContent = [
  {
    icon: CgSandClock,
    title: "Duration",
    para: "4.5 Months",
  },
  {
    icon: FiWatch,
    title: "Weekly Hours",
    para: "8 hours",
  },
  {
    icon: TbWorld,
    title: "Course Type",
    para: "100% Online",
  },
  {
    icon: GrCertificate,
    title: "Course Access",
    para: "Free",
  },
];

export default WebDevCoursePage;
