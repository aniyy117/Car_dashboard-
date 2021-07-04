import React from "react";
import { UnixTimestampToLocalDate } from "../../Utils/UnixTimestampToLocalDate";

const ListOfAllBidsByUser = ({ bidsList, tableHeadings }) => {
  return (
    <div className="flex flex-col mt-5 overflow-x-scroll xl:overflow-x-hidden">
      <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-500 sm:rounded-lg mx-auto w-1/2"></div>
      <table className="max-w-4xl mx-auto my-8 divide-gray-200 customer-table shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr className="text-left text-xs font-base text-gray-500 dark:text-gray-200 uppercase tracking-wider">
            {tableHeadings.map((heading, index) => {
              return (
                <th scope="col" className="px-6 py-3" key={heading}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bidsList ? (
            bidsList?.map((bid, index) => {
              return (
                <tr
                  className="bg-gray-200 text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-600"
                  key={bid.id}>
                  <td className=" px-8 py-4">{index + 1}</td>
                  <td className=" px-8 py-4">{bid.id}</td>
                  <td className=" px-8 py-4">{bid.carTitle}</td>
                  <td className=" px-8 py-4">{bid.amount}</td>
                  <td className=" px-8 py-4">{UnixTimestampToLocalDate(bid.created)} </td>
                </tr>
              );
            })
          ) : (
            <React.Fragment>
              {tableHeadings?.map((heading) => {
                return (
                  <tr className="text-center animate-pulse bg-gray-200" key={heading}>
                    <td colSpan="5" className="h-10"></td>
                  </tr>
                );
              })}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfAllBidsByUser;
