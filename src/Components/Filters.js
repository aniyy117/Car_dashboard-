import React, { useContext } from "react";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";

const Filters = React.memo(
  ({ customersInAscendingOrderByBidAmount, selectedOption }) => {
    const { setBiddingSortingOrder } = useContext(CustomerDataProviderContext);

    return (
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between space-y-2 mb-2 px-4 py-2 bg-red-500 rounded-lg shadow-md ">
        <h4 className="text-white font-semibold">Filters</h4>
        <div
          className="filter-container flex items-center space-x-4 justify-between"
          title="Sort customers data in Ascending or descending order"
        >
          <form>
            <select
              name="sort table"
              className="p-1 focus:outline-none bg-transparent text-gray-500 border border-gray-500  shadow-md"
              onChange={(e) =>
                customersInAscendingOrderByBidAmount(e.target.value)
              }
              value={selectedOption}
            >
              <option
                value="maxbid"
                className="text-gray-400 dark:text-gray-200"
              >
                Maximum Bids
              </option>
              <option
                value="minbid"
                className="text-gray-400 dark:text-gray-200"
              >
                Minimum Bids
              </option>
            </select>
          </form>
          <div
            className="flex items-center mr-2"
            title="Toggle between the maximum and minimum bid of a customer"
          >
            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  onChange={(e) => setBiddingSortingOrder()}
                />
                <div className="block bg-gray-600 dark:bg-gray-500 w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
);

Filters.displayName = "Filters";

export default Filters;
