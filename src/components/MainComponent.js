import React from "react";
import Header from "./HeaderComponent";
import CustomerSection from "./CustomersComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" />
        <Route exact path="/customers" component={CustomerSection} />
        <Route exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default Main;
