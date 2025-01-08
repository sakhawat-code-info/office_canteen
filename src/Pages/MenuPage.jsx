import React from "react";

const MenuPage = () => {
  return (
    <div>
      <div className="font-[sans-serif]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-gray-800 text-2xl font-bold mb-3">
              7 days food chart
            </h2>
            <p className="text-sm text-gray-500">
              Change your plant according your needs
            </p>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border">
              {/* <thead className="whitespace-nowrap">
                <tr className="h-24">
                  <th className="text-gray-800 px-2 font-semibold text-base">
                    Features
                  </th>
                  <th className="text-gray-800 px-2 font-semibold text-base w-48">
                    Basic
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      1 Month
                    </p>
                  </th>
                  <th className="text-gray-800 px-2 font-semibold text-base w-48 relative">
                    <span className="px-2 leading-6 text-[10px] font-semibold text-white bg-orange-400 absolute top-0">
                      Most popular
                    </span>
                    Standard
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      2 Months
                    </p>
                  </th>
                  <th className="text-gray-800 px-2 font-semibold text-base w-48">
                    Sponsored
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      3 Months
                    </p>
                  </th>
                  <th className="text-gray-800 px-2 font-semibold text-base w-48">
                    Featured
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      1 Month
                    </p>
                  </th>
                  <th className="text-gray-800 px-2 font-semibold text-base w-48">
                    Elite
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      1 Month
                    </p>
                  </th>
                </tr>
              </thead> */}

              <tbody className="whitespace-nowrap border">
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-gray-800">Satarday</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                </tr>
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-gray-800">Sunday</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                </tr>
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-gray-800">Monday</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                </tr>
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-gray-800">Satarday</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                </tr>
                <tr className="even:bg-blue-50">
                  <td className="p-4 text-sm text-gray-800">Satarday</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                  <td className="p-4 text-center">Vat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
