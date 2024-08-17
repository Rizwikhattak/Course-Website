import React, { useState } from "react";

const ModalRegistration = ({ toggleModal, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={toggleModal}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    {" "}
                    <rect
                      width="36"
                      height="36"
                      x="6"
                      y="6"
                      fill="#3ddab4"
                    ></rect>
                    <polygon
                      fill="#c1f5ea"
                      points="18.843,30.289 35.015,13.604 39.091,17.515 22.92,34.179"
                    ></polygon>
                    <polygon
                      fill="#c1f5ea"
                      points="22.932,34.179 12.768,24.509 16.679,20.433 26.86,30.119"
                    ></polygon>
                    <polygon
                      fill="#fff"
                      points="22.926,34.173 26.86,30.119 22.775,26.233 18.843,30.289"
                    ></polygon>{" "}
                  </svg>
                </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Your Data has been submitted
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalRegistration;
