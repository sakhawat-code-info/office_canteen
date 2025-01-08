import React from "react";

const MonthlyCostPage = () => {
  return (
    <div>
      <div className="text-center m-7">
        <h2 className="text-2xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          Monthly Cost History
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Date</th>
              <th>Daily Bazar Cost</th>
              <th>Daily Customar Sell</th>
              <th>Daily Meal</th>
              <th>Meal Rate</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="hover text-center">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">99.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">89.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">77.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">65.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">49.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">59.60 tk</td>
            </tr>
            <tr className="hover">
              <th>1</th>
              <td>1/1/2025</td>
              <td className="text-center">9000 tk</td>
              <td className="text-center">3000 tk</td>
              <td className="text-center">150</td>
              <td className="text-center">49.60 tk</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th className="text-center">Total = </th>
              <th className="text-center">78,000/=</th>
              <th className="text-center">40,000/=</th>
              <th className="text-center">1500</th>
              <th className="text-center">44.00/=</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MonthlyCostPage;
