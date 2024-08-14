import React, { useReducer, useRef, useEffect } from "react";

function reducerFunction(state, action) {
  switch (action.type) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return state.map((currElem, currIndex) => {
        return currIndex === action.type - 1
          ? { ...currElem, courseState: action.payload }
          : { ...currElem, courseState: false };
      });
    default:
      return state;
  }
}

const CanvasWebDev = ({ CanvasData, check }) => {
  const [state, dispatch] = useReducer(reducerFunction, CanvasData);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = state[index].courseState
          ? `${ref.scrollHeight}px`
          : "0px";
      }
    });
  }, [state]);

  return (
    <div
      className="my-3 w-full"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <h1 className="text-xl mdsm:text-5xl font-semibold text-center py-3">
        {check ? "What topics you will cover" : "FAQS"}
      </h1>

      <div className="accodions flex flex-col gap-4">
        {state.map(({ title, type, courseState, content }, index) => (
          <div className="rounded-3xl" key={index}>
            <h2 id={`accordion-collapse-heading-${type}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3 rounded-3xl text-black`}
                style={{
                  backgroundColor: "white",
                  borderStyle: "solid",
                  borderWidth: "4px 0px 0px 0px",
                  borderColor: "#25D366",
                }}
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
              className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out`}
              aria-labelledby={`accordion-collapse-heading-${type}`}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="p-5">
                <ul className="text-gray-400 list-inside list-disc space-y-3 p-3 ">
                  {check
                    ? content.map((text, index) => <li key={index}>{text}</li>)
                    : content}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasWebDev;
