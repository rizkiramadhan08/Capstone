import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RuteSection = () => {
  return (
    <section className="flex felx-col justify-center bg-blue-50 py-10 px-6 rounded-lg shadow-md mx-auto max-w-6xl my-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Find Your Way to Adventure!
        </h2>
        <p className="text-gray-600 mt-2">
          Click to explore exciting routes and destinations.
        </p>
        <button className="mt-6 flex items-center justiy-center mx-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full shadow transition-all">
          <span className="pb-1">Explore</span>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default RuteSection;
