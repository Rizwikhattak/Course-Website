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
import { Link } from "react-router-dom";

const WebDevCoursePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="web-dev-page h-full w-full block mlg:flex mlg:justify-between bg-secondary p-5 ">
      <div className="web-dev-content-data p-5 mdsm:pl-20 text-white h-full w-full mlg:w-[60%]">
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
        <div className="web-dev-reg-page pt-10 w-full block mlg:hidden pb-10">
          <RegistrationCard />
        </div>
        <div className="course-second-section hidden mlg:flex   justify-between items-center py-10 text-white">
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
            {["OverView", "Start Dates", "Achieve"].map((text, currIndex) => {
              return (
                <button
                  key={currIndex}
                  className="text-white hover:text-green-300 transition duration-300 ease-in-out"
                  onClick={() => scrollToSection(text.replace(/\s+/g, ""))}
                >
                  {text}
                </button>
              );
            })}
          </div>
          <div className="course-fourth-section pl-5 py-10" id="OverView">
            <h1 className="py-5 font-bold mdsm:font-semibold text-xl  mdsm:text-3xl">
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
          <div className="course-fifth-section pl-5 py-5" id="Achieve">
            <h1 className="py-5 font-bold mdsm:font-semibold text-xl mdsm:text-3xl">
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
          <CanvasWebDev CanvasData={initialCourses} check={true} />
        </div>
        <div className="course-seventh-section w-full pl-5" id="StartDates">
          <div className="course-seventh-content">
            <h1 className="font-bold mdsm:font-semibold text-xl  mdsm:text-3xl py-5">
              When Would You Like To Start?
            </h1>
            <p>
              Start straight away and join a global classroom of learners. If
              the course hasn’t started yet you’ll see the future date listed
              below.
            </p>
          </div>
          <div className="course-seventh-date w-full flex justify-between items-center my-5 border-l-4 border-l-primary border-y-[1px] border-y-white pl-3 mdsm:pl-6 py-2">
            <div className="date-content-icon flex gap-x-2 items-center">
              <span>
                <SlCalender className="mdsm:w-6 mdsm:h-6 w-4 h-4" />
              </span>
              <h1>Available Now</h1>
            </div>
            <div className="date-btn">
              <Link to="/RegistrationForm">
                <button className=" rounded-md py-1  px-3 mdsm:px-5 bg-primary text-white hover:bg-white hover:text-primary transition duration-300 ease-in-out">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="web-dev-reg-page w-[40%] relative hidden mlg:block">
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
    para: "3 Months",
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

const htmlCourseContent = [
  "Introduction to HTML & Basic Structure",
  "HTML Elements: Headings, Paragraphs, and Text Formatting",
  "Links and Navigation: Anchor Tags and Navigation Bars",
  "Images, Audio, and Video: Embedding Multimedia",
  "Forms and Inputs: Creating Interactive Forms",
];

const cssCourseContent = [
  "Introduction to CSS & Syntax",
  "Selectors and Specificity",
  "The Box Model: Margin, Border, Padding, and Content",
  "Colors and Backgrounds: Properties and Gradients",
  "Typography: Fonts, Text Styles, and Line Spacing",
  "Flexbox: Layout and Alignment Techniques",
  "Grid Layout: Creating Complex Layouts",
  "Responsive Design: Media Queries and Breakpoints",
  "CSS Positioning: Static, Relative, Absolute, Fixed, and Sticky",
  "Transitions and Animations: Adding Movement to Webpages",
];

const javascriptCourseContent = [
  "FUNDAMENTALS OF JAVASCRIPT",
  "VARIABLES",
  "CONDITIONAL LOGIC (IF-ELSE)",
  "ARRAYS",
  "OBJECTS, AND LOOPS",
  "NEWEST ES6 AND ES7 FEATURES,INCLUDING ARROW FUNCTIONS, LET AND CONST",
  "FUNCTIONS, PARAMETERS-ARGUMENTS,AND RETURN VALUES",
  "HIGHER LEVEL FUNCTIONS AND CALLBACKS",
  "ARRAY AND STRING METHODS",
  "ASYNCHRONOUS JAVASCRIPT WITHPROMISES AND ASYNC",
];

const tailwindCourseContent = [
  "Introduction to Tailwind CSS: Setup and Configuration",
  "Utility-First Principles: Understanding the Utility-First Approach",
  "Responsive Design: Breakpoints and Media Queries",
  "Container: Centering and Managing Layout Width",
  "Flexbox: Layout Utilities for Flexbox",
  "Grid Layout: Creating Complex Grid Structures",
  "Spacing: Margin and Padding Utilities",
  "Typography: Font Size, Weight, Line Height, and Text Alignment",
  "Backgrounds: Colors, Gradients, and Background Images",
  "Borders: Border Radius, Width, and Color Utilities",
  "State Variants: Hover, Focus, Active, and More",
  "Dark Mode: Implementing Dark Mode in Tailwind CSS",
  "Customizing Tailwind: Configuring the Tailwind Config File",
  "Plugins: Extending Tailwind with Custom Plugins",
  "Best Practices: Writing Clean and Maintainable Tailwind CSS",
];

const reactCourseContent = [
  "Introduction to React: Understanding the Basics and Key Concepts",
  "Setting Up the Development Environment: Create React App",
  "JSX: Syntax and Expressions",
  "Components: Functional and Class Components",
  "Props: Passing Data to Components",
  "State: Managing Component State",
  "Lifecycle Methods: Component Mounting, Updating, and Unmounting",
  "Event Handling: Handling User Interactions",
  "Conditional Rendering: Displaying Elements Conditionally",
  "Lists and Keys: Rendering Lists of Data",
  "Forms and Controlled Components: Handling User Input",
  "Hooks: useState, useEffect, and Custom Hooks",
  "Context API: Managing Global State",
  "React Router: Navigation and Routing in React Applications",
  "Handling Side Effects: Fetching Data with useEffect",
  "Performance Optimization: Memoization and React.memo",
  "Testing React Components: Unit and Integration Testing with Jest and React Testing Library",
  "Deploying React Applications: Deployment Strategies and Tools",
];

const initialCourses = [
  {
    title: "HTML5",
    type: 1,
    courseState: false,
    content: htmlCourseContent,
  },
  {
    title: "CSS3",
    type: 2,
    courseState: false,
    content: cssCourseContent,
  },
  {
    title: "Tailwind CSS",
    type: 3,
    courseState: false,
    content: tailwindCourseContent,
  },
  {
    title: "JavaScript",
    type: 4,
    courseState: false,
    content: javascriptCourseContent,
  },
  {
    title: "React Js",
    type: 5,
    courseState: false,
    content: reactCourseContent,
  },
];

export default WebDevCoursePage;
