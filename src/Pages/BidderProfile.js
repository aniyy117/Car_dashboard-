import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ListOfAllBidsByUser from "../Components/BidderProfile/ListOfAllBidsByUser";
import Container from "../Container/Container";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";

const tableHeadings = ["#", "bid id", "car model", "bid amount", "bid date"];

const BidderProfile = (props) => {
  const { value: customers } = useContext(CustomerDataProviderContext);
  const [customerProfile, setCustomerProfile] = useState(null);

  // find the customer in global context by Id.
  useEffect(() => {
    if (customers)
      setCustomerProfile(
        customers?.filter((customer) => customer?.id === props.match.params.userId)[0]
      );
  }, [customers, props.match.params?.userId]);

  return (
    <Container className="overflow-x-hidden">
      <Helmet>
        <title>CarBazaar - User Profile</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center space-y-4 mt-5">
        {customerProfile ? (
          <img
            src={customerProfile?.avatarUrl}
            alt={customerProfile?.firstname}
            className="rounded-full shadow-md border p-3 dark:border-gray-700 dark:shadow-lg h-32 w-32"
          />
        ) : (
          <div className="rounded-full shadow-md border p-3 dark:border-gray-700 dark:shadow-lg h-32 w-32 animate-pulse bg-gray-300 dark:bg-gray-600"></div>
        )}
        <h2 className="font-medium text-xl dark:text-gray-200">
          {customerProfile ? (
            <p>
              {customerProfile?.firstname} {customerProfile?.lastname}
            </p>
          ) : (
            <p className="w-56 h-4 bg-gray-100 dark:bg-gray-600 rounded-xl"></p>
          )}
        </h2>
      </div>
      <ListOfAllBidsByUser bidsList={customerProfile?.bids} tableHeadings={tableHeadings} />
    </Container>
  );
};

export default BidderProfile;
