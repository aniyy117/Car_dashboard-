import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.css";
import App from "./App";
import CustomerDataProvider from "./Context/CustomerListContext";

ReactDOM.render(
  <React.StrictMode>
    <CustomerDataProvider>
      <App />
    </CustomerDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
