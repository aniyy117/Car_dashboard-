import React from "react";
import Bidder from "./components/Bidder";

export const BiddersList = ({ customersList, tableHeadings }) => {
  return (
    <React.Fragment>
      <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg mt-5 overflow-x-scroll xl:overflow-x-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500 customer-table">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-left text-xs font-base text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              {tableHeadings?.map((heading) => {
                return (
                  <th
                    scope="col"
                    className={`py-3 ${heading === "name" ? "px-12" : "px-6"}`}
                    key={heading}>
                    {heading}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-600 dark:divide-gray-600">
            {customersList?.length > 0 ? (
              customersList?.map((customer, index) => {
                if (!customer?.firstname) return;
                return <Bidder customer={customer} key={customer.id} index={index} />;
              })
            ) : (
              <React.Fragment>
                {tableHeadings?.map((heading) => {
                  return (
                    <tr className="text-center animate-pulse" key={heading}>
                      <td colSpan="6" className="h-16"></td>
                    </tr>
                  );
                })}
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
