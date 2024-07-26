import React from "react";

const Motive = () => {
  return (
    <section className="px-5 py-16 bg-[#242424]">
      <h1 className="text-3xl font-semibold text-white pl-8">
        This is how we define our motive to prepare you, for you.
      </h1>
      <div className=" flex justify-around items-center py-10">
        <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Discover your interest
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Gain knowledge
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Apply knowledge
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Test knowledge
        </div>
        <div className="bg-white p-7 rounded-lg shadow-2xl hover:bg-primary hover:text-white transition duration-300 ease-in-out">
          Execute knowledge
        </div>
      </div>
    </section>
  );
};

export default Motive;
