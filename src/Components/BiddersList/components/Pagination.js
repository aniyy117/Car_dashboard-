import React from "react";

const Pagination = ({
  customersPerPage,
  totalCustomers,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center my-5 font-medium space-x-2 text-gray-600 text-xl">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number ? "bg-red-500 text-gray-50" : null
              } px-4 rounded-md focus:outline-none dark:text-gray-50`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
