import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";

export function CustomerLi(props) {
  return (
    <ListGroupItem tag="a" href="#" action onClick={() => props.setActiveCustomer(props.customerObj)}>
      {props.name}
    </ListGroupItem>
  );
}

export class Customer extends Component {
  constructor(name = "Name not provided", company = "", email = "", phone = "") {
    super(name, company, email, phone);

    this.state = {
      name: name,
      company: company,
      email: email,
      phone: phone,
      id: `${name[0]}${company[0]}${phone[0]}`,
      outreach: {
        phone: [
          {
            date: "",
            time: "",
            context: ["New Customer", "New Project", "Status Update", "Billing"],
            message: "",
          },
        ],
        email: [
          {
            date: "",
            time: "",
            context: ["New Customer", "New Project", "Status Update", "Billing"],
            message: "",
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <CustomerLi name={this.name} />
      </>
    );
  }
}

