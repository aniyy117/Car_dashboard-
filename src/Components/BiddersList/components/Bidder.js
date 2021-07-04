import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerDataProviderContext } from "../../../Context/CustomerListContext";

const Bidder = ({ customer, index }) => {
  const [bid, setBid] = useState(null);
  const { sortByMin } = useContext(CustomerDataProviderContext);
  const BidsIncremental = customer.bids.sort((prevBid, nextBid) => nextBid.amount - prevBid.amount);
  useEffect(() => {
    setBid(BidsIncremental[0]?.amount);
  }, [BidsIncremental]);

  useEffect(() => {
    !sortByMin
      ? setBid(BidsIncremental[0]?.amount)
      : setBid(BidsIncremental[BidsIncremental?.length - 1]?.amount);
  }, [BidsIncremental, sortByMin]);

  return (
    <tr key={customer.email} className="hover:shadow-sm">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{index}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link
          to={{
            pathname: `/dashboard/${customer.firstname}-${customer.lastname}/${customer.id}`,
            userId: customer.id,
          }}
          className=" px-4 py-2 flex space-x-4 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full">
              <img className="h-10 w-10 rounded-full" src={customer.avatarUrl} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-gray-300">
                {customer.firstname} {customer.lastname}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</div>
            </div>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {customer.hasPremium ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            True 
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
            False
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-400">+91 {customer.phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {customer.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        $ {bid || 0}
      </td>
    </tr>
  );
};

export default Bidder;
