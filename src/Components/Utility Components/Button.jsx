import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Button({ content }) {
  return (
    <button className="px-5 py-3 rounded-md bg-[#1e8947] flex  items-center text-center hover:bg-white hover:text-[#1e8947]  transition duration-300 ease-in-out">
      <span>{content}</span>

      <span className="px-2">
        <FaArrowRightLong className="" />
      </span>
    </button>
  );
}

export default Button;
