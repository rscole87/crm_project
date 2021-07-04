import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import {Customer, CustomerLi} from "./Customer";
import CUSTOMERLIST from "../shared/customerList";


function CustomerProfile(props) {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}
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
            <CustomerLi name={customer.state.name} key={customer.state.id} customerObj={customer} setActiveCustomer={this.setActiveCustomer} />
          ))}
        </ListGroup>
        <CustomerProfile 
            name={this.state.activeCustomer.state.name} 
            company={this.state.activeCustomer.state.company}
            email={this.state.activeCustomer.state.email}
            phone={this.state.activeCustomer.state.phone}
            id={this.state.activeCustomer.state.id}
            outreach={this.state.activeCustomer.state.outreach}
            />
      </section>
    );
  }
}

export default CustomerSection;
