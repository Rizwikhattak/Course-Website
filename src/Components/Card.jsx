import React from "react";

const Card = ({ Icon, text }) => {
  return (
    <div className="group bg-white p-8 w-60 flex flex-col gap-y-3 justify-center items-center rounded-lg hover:bg-[#1e8947] transition duration-500 ease-in-out">
      <div className="logo_ bg-black rounded-full w-16 h-16 flex justify-center items-center group-hover:bg-white group-hover:text-black transition  duration-500 ease-in-out text-white">
        <Icon className="w-7 h-7" />
      </div>
      <div className="logo-text  ">
        <h1 className="text-2xl group-hover:text-white transition duration-500 ease-in-out text-black">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Card;
