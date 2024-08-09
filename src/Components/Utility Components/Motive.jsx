import React from "react";
import Slide from "react-reveal/Slide";

const Motive = () => {
  return (
    <section className=" px-2 mdsm:px-5 py-16 bg-[#242424]">
      <h1 className="text-3xl font-semibold text-white pl-0 mdsm:pl-8">
        This is how we define our motive to prepare you, for you.
      </h1>

      <div className=" flex flex-wrap justify-around gap-5 items-center py-10">
        <Slide right duration={1000} distance="50px">
          <div className="bg-white px-5 py-7 mdsm:p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold w-52 mdsm:w-auto">
            Discover your interest
          </div>
          <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold w-52 mdsm:w-auto">
            Gain knowledge
          </div>
          <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold w-52 mdsm:w-auto">
            Apply knowledge
          </div>
          <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold w-52 mdsm:w-auto">
            Test knowledge
          </div>
          <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold w-52 mdsm:w-auto">
            Execute knowledge
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Motive;
