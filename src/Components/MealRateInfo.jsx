import React from "react";

const MealRateInfo = () => {
  return (
    <div>
      <div className="bg-gray-50 p-2  flex items-center justify-center font-sans">
        <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
          <div className="text-center">
            <h3 className="text-gray-800 text-4xl font-extrabold">
              70.50<span className="text-blue-600">tk</span>
            </h3>
            <p className="text-gray-500 text-base font-semibold mt-3">
              Current Meal Rate
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-800 text-4xl font-extrabold">
              40,000<span className="text-blue-600">tk</span>
            </h3>
            <p className="text-gray-500 text-base font-semibold mt-3">
              Customar Sell
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-800 text-4xl font-extrabold">
              450<span className="text-blue-600"></span>
            </h3>
            <p className="text-gray-500 text-base font-semibold mt-3">
              Total Meal
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-800 text-4xl font-extrabold">
              90,000<span className="text-blue-600">tk</span>
            </h3>
            <p className="text-gray-500 text-base font-semibold mt-3">
              Total Bazar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealRateInfo;
