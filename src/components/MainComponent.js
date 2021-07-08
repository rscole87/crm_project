import React, { Component } from "react";
import Header from "./HeaderComponent";
import CustomerSection from "./CustomerSection";
import { Home } from "./HomeComponent";
import { Contact } from "./ContactComponent";
import CUSTOMERLIST from "../shared/customerList";

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: CUSTOMERLIST,
      activeCustomer: CUSTOMERLIST[0],
    };
    
    this.setActiveCustomer = this.setActiveCustomer.bind(this);
    this.setCustomers = this.setCustomers.bind(this);
  }

  setActiveCustomer(customer) {
    this.setState({
      activeCustomer: customer,
    });
    console.log(`Customer changed: ${customer.name}`);
  }


  setCustomers(newCustomer) {
    this.setState({
      customerList: [...this.state.customerList, newCustomer],
    });
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/customers" render={() => <CustomerSection customerList={this.state.customerList}  activeCustomer={this.state.activeCustomer} setActiveCustomer={this.setActiveCustomer} setCustomers={this.setCustomers}/>} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
}

export default Main;
