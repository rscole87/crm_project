import React from "react";
import Header from "./HeaderComponent";
import CustomerSection from "./CustomersComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <CustomerSection />
    </>
  );
}

export default Main;
