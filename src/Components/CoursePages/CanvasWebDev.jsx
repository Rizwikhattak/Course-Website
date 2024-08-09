import React, { useReducer } from "react";

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

const CanvasWebDev = ({ CanvasData, check }) => {
  const [state, dispatch] = useReducer(reducerFunction, CanvasData);

  return (
    <div className="my-3" id="accordion-collapse" data-accordion="collapse">
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

      <h1 className="text-xl mdsm:text-5xl font-semibold text-center py-3">
        {check ? "What topics you will cover" : "FAQS"}
      </h1>

      {state.map(({ title, type, courseState, content }, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${type}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 ${
                check
                  ? "focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700"
                  : ""
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                index == 0 ? "rounded-t-xl" : ""
              }
              ${
                check && index == state.length - 1
                  ? " border-b-[1px] border-gray-200 dark:border-gray-700"
                  : ""
              }
              ${check == false ? "border-b-[1px] border-gray-200" : ""}
              
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
                {check
                  ? content.map((text, index) => <li key={index}>{text}</li>)
                  : content}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CanvasWebDev;
