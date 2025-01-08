import React from "react";

const MyMeal = () => {
  return (
    <div>
      {/* input form */}
      <div className="bg-gradient-to-t from-gray-800 to-gray-700 font-[sans-serif] px-6 mb-3">
        <div className="grid md:grid-cols-2 items-center sm:gap-12 gap-6 max-w-6xl mx-auto min-h-[200px]">
          <div>
            <h6 className="sm:text-2xl text-xl text-gray-300 mb-1.5 tracking-wide">
              Check your
            </h6>
            <h3 className="sm:text-5xl text-3xl text-white font-bold uppercase tracking-wider">
              Meal
            </h3>
          </div>

          <div className="bg-gray-100 flex p-1 rounded-full focus-within:bg-white">
            <input
              type="text"
              placeholder="Your Office ID"
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
            />
            <button
              type="button"
              className="bg-gray-700 hover:bg-gray-800 transition-all text-white font-semibold text-sm rounded-full px-6 py-3"
            >
              Check
            </button>
          </div>
        </div>
      </div>
      {/* personal details */}
      <div className="text-center">
        <img
          src="https://readymadeui.com/team-3.webp"
          className="w-32 h-32 rounded-full inline-block"
        />

        <div className="py-4">
          <h4 className="text-xl font-bold text-gray-800">Abdur Rajjak</h4>
          <p className="text-gray-800 text-base mt-1">20110204</p>
          <p className="text-gray-800 text-base mt-1">Manager</p>
          <p className="text-gray-800 text-base mt-1">Advance : 1500/=</p>
          <p className="text-gray-800 text-base mt-1">
            Available Balance : 1500- 300 = 1200/=
          </p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-base font-bold text-gray-600 underline">
          {" "}
          Meal History
        </h3>
      </div>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Name</th>
              <th>Designation</th>
              <th className="text-center">ID</th>
              <th className="text-center">Meal</th>
              <th className="text-center">Egg</th>
              <th className="text-center">Guest Meal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>01/01/2025</td>
              <td>Abdur Razzak</td>
              <td>Manager</td>
              <td className="text-center">201101201</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th className="text-center">Total = </th>
              <th className="text-center">3</th>
              <th className="text-center">1</th>
              <th className="text-center">0</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyMeal;
