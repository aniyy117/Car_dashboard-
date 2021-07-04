import React, { useState, useContext, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

import { BiddersList } from "../Components/BiddersList/BiddersList";
import Pagination from "../Components/BiddersList/components/Pagination";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";
import { PageTitle } from "../Components/Typography/Titles";
import Filters from "../Components/Filters";

const tableHeadings = ["#", "name", "premium", "phone", "Email", "max/min bid"];

const Home = () => {
  const { value: customersList } = useContext(CustomerDataProviderContext);

  const [customers, setCustomers] = useState([]);
  const [selectedOption, setselectedOption] = useState("maxbid");
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(7);

  useEffect(() => {
    // Its an ugly hack but It works.
    // On rerender of component It will update customers state again.
    // Assigning customersList only will not cause table to rerender.
    if (customersList) setCustomers([...customersList, { id: "render" }]);
  }, [customersList]);

  // slice customers data for paging
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers?.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // sortData in asc and desc order.
  // revert the list on select.
  const customersInAscendingOrderByBidAmount = useCallback(
    (e) => {
      if (e === "minbid") {
        setCustomers(customers.reverse());
        setselectedOption("minbid");
      }
      if (e === "maxbid") {
        setCustomers(customers.reverse());
        setselectedOption("maxbid");
      }
    },
    [customers]
  );

  return (
    <React.Fragment>
      <Helmet>
        <title>CarBazaar - Dashboard</title>
      </Helmet>
      <React.Fragment>
        <div className="flex justify-between items-center">
          <PageTitle className="text-center font-medium text-2xl">
            Bidders List
          </PageTitle>
        </div>

        <Filters
          customersInAscendingOrderByBidAmount={
            customersInAscendingOrderByBidAmount
          }
          selectedOption={selectedOption}
        />
      </React.Fragment>
      <div className="bidders-list">
        <BiddersList
          customersList={currentCustomers}
          tableHeadings={tableHeadings}
        />
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={customers?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
