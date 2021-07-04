import React, { useState, useEffect } from "react";
import { CustomersList } from "../Utils/CustomersLIst";

export const CustomerDataProviderContext = React.createContext();
const CustomerDataProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState(null);
  const [sortByMinimumFirst, setSortByMinimumFirst] = useState(false);

  useEffect(() => {
    CustomersList().then((data) => {
      setCustomerData(data);
    });
  }, []);

  const setBiddingSortingOrder = () => {
    setSortByMinimumFirst(!sortByMinimumFirst);
  };

  return (
    <CustomerDataProviderContext.Provider
      value={{
        value: customerData,
        sortByMin: sortByMinimumFirst,
        setBiddingSortingOrder: setBiddingSortingOrder,
      }}>
      {children}
    </CustomerDataProviderContext.Provider>
  );
};

export default CustomerDataProvider;
