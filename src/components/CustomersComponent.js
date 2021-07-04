import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import { RenderCustomerLi, RenderCustomerProfile } from "./Customer";
import CUSTOMERLIST from "../shared/customerList";

class CustomerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: CUSTOMERLIST,
      activeCustomer: CUSTOMERLIST[0],
    };

    this.setActiveCustomer = this.setActiveCustomer.bind(this);
  }

  setActiveCustomer(customer) {
    this.setState({
      activeCustomer: customer,
    });
    console.log(`Customer changed: ${customer.state.name}`);
  }

  render() {
    const customers = this.state.customerList;

    return (
      <section id="customer-section">
        <ListGroup>
          {customers.map((customer) => (
            <RenderCustomerLi name={customer.state.name} key={customer.state.id} customerObj={customer} setActiveCustomer={this.setActiveCustomer} />
          ))}
        </ListGroup>
        <RenderCustomerProfile customer={this.state.activeCustomer} />
      </section>
    );
  }
}

export default CustomerSection;
