import React from "react";
import Header from "./HeaderComponent";
import CustomerSection from "./CustomersComponent";
import { Home } from "./HomeComponent";
import { Contact } from "./ContactComponent";

import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/customers" component={CustomerSection} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default Main;
