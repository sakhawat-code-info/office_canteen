import React from "react";

const TodaysMeal = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="font-extrabold text-5xl text-orange-500 leading-tight">
          <span className="text-gray-800">Today's</span> Meal
        </h3>
        <h6 className="text-2xl text-gray-800 mt-2">Fish Cari</h6>
        <p className="text-gray-800 text-base leading-relaxed mt-4">
          Katla fish, Rice, Sabji, Dal, Water.
        </p>

        <button className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-5">
          Started at 1.10 PM
        </button>
      </div>
    </div>
  );
};

export default TodaysMeal;
