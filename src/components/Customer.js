import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";


export function RenderCustomerLi(props) {
  return (
    <ListGroupItem tag="a" href="#" action onClick={() => props.setActiveCustomer(props.customerObj)}>
      {props.name}
    </ListGroupItem>
  );
}

function RenderPhoneCalls({ outreach }) {
  let callCount = 0;
  let phoneCalls;
  if (outreach.phone) {
    phoneCalls = outreach.phone;
    return (
      <>
        <h5>Phone Calls</h5>
        {phoneCalls.map((call) => (
          <li key={callCount}>
            {call.date}
            {call.time}
            {call.message}
          </li>
        ))}
      </>
    );
  }

  return <div></div>;
}

export function RenderCustomerProfile(props) {
  return (
    <>
      <div className="client-profile">
        <div className="profile-heading">
          <h3>{props.customer.state.name}</h3>
          <h5 className="company-heading">{props.customer.state.company}</h5>
          <p>{props.customer.state.email}</p>
          <p>{props.customer.state.phone}</p>
        </div>
        <div>
          <RenderPhoneCalls outreach={props.customer.state.outreach} />
          <Button onClick={props.customer.addCall}>Add Call</Button>
        </div>
      </div>
    </>
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

    this.addCall = this.addCall.bind(this);
  }

  addCall(){
    console.log('call added');
  }


  render() {
    return (
      <>
      </>
    );
  }
}

