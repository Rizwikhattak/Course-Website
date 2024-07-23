import React, { useReducer } from "react";

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

function reducerFunction(state, action) {
  switch (action.type) {
    case 1:
      return state.map((currElem, currIndex) => {
        return currIndex === 0
          ? {
              ...currElem,
              courseState: action.payload,
            }
          : {
              ...currElem,
              courseState: false,
            };
      });

    case 2:
      return state.map((currElem, currIndex) => {
        return currIndex === 1
          ? {
              ...currElem,
              courseState: action.payload,
            }
          : {
              ...currElem,
              courseState: false,
            };
      });
    case 3:
      return state.map((currElem, currIndex) => {
        return currIndex === 2
          ? {
              ...currElem,
              courseState: action.payload,
            }
          : {
              ...currElem,
              courseState: false,
            };
      });
    case 4:
      return state.map((currElem, currIndex) => {
        return currIndex === 3
          ? {
              ...currElem,
              courseState: action.payload,
            }
          : {
              ...currElem,
              courseState: false,
            };
      });
    case 5:
      return state.map((currElem, currIndex) => {
        return currIndex === 4
          ? {
              ...currElem,
              courseState: action.payload,
            }
          : {
              ...currElem,
              courseState: false,
            };
      });
    default:
      return state;
  }
}

const CanvasWebDev = () => {
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

  const [state, dispatch] = useReducer(reducerFunction, initialCourses);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <style jsx>{`
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        .accordion-content.open {
          max-height: 500px; /* Adjust this value to the maximum height needed */
        }
      `}</style>

      {state.map(({ title, type, courseState, content }, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${type}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                index == 0 ? "rounded-t-xl" : ""
              }
              ${
                index == state.length - 1
                  ? "border-b border-gray-200 dark:border-gray-700"
                  : ""
              }
              
              `}
              data-accordion-target={`#accordion-collapse-body-${type}`}
              aria-expanded={courseState}
              aria-controls={`accordion-collapse-body-${type}`}
              onClick={() => dispatch({ type: type, payload: !courseState })}
            >
              <span>{title}</span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 shrink-0 ${
                  courseState ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${type}`}
            className={`accordion-content ${courseState ? "open" : ""}`}
            aria-labelledby={`accordion-collapse-heading-${type}`}
          >
            <div className="border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <ul className=" text-gray-500 dark:text-gray-400 list-inside list-disc space-y-3 p-3">
                {content.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CanvasWebDev;
