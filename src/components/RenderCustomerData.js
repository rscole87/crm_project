import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { ListGroupItem, Button } from "reactstrap";
import { NewOutreachForm } from "./NewOutreachForm";

export function RenderCustomerLi(props) {
  return (
    <ListGroupItem tag="a" href="#" action onClick={() => props.setActiveCustomer(props.customer)}>
      {props.customer.name}
    </ListGroupItem>
  );
}

function RenderPhoneCalls({ outreach }) {
  let phoneCalls;
  if (outreach.phone) {
    phoneCalls = outreach.phone;
    return (
      <ul>
        {phoneCalls.map((call, idx) => (
          <li key={idx} className="outreach-entry">
            {call.date} - {call.message}
          </li>
        ))}
      </ul>
    );
  }

  return <div></div>;
}

function RenderEmails({ outreach }) {
  let emails;
  if (outreach.email) {
    emails = outreach.email;
    return (
      <ul>
        {emails.map((email, idx) => (
          <li key={idx} className="outreach-entry">
            {email.date} - {email.message}
          </li>
        ))}
      </ul>
    );
  }

  return <div></div>;
}

export class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      messageType: null,
      message: "",
      context: "",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.setContext = this.setContext.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.addCall = this.addCall.bind(this);
    this.addEmail = this.addEmail.bind(this);
  }

  toggleModal(type) {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.setState({ messageType: type });
  }

  setMessage(message) {
    this.setState({ message: message });
  }

  setContext(context) {
    this.setState({ context: context });
  }

  addCall(message, context) {
    let messageObj = {
      message: message,
      context: context,
      date: new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(new Date().toISOString()))),
    };
    this.props.customer.outreach.phone.push(messageObj);
  }

  addEmail(message, context) {
    let messageObj = {
      message: message,
      context: context,
      date: new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(new Date().toISOString()))),
    };
    this.props.customer.outreach.email.push(messageObj);
  }

  render() {
    return (
      <>
        <div className="client-profile p-4">
          <div className="profile-heading pb-3">
            <h3>{this.props.customer.name}</h3> <h5 className="company-heading">{this.props.customer.company}</h5>
            <p>Email: {this.props.customer.email}</p>
            <p>Phone: {this.props.customer.phone}</p>
          </div>
          <div className="row">
            <div className="outreach-area col col-sm-6">
              <div className="outreach-heading mt-3 pb-3" >
                <h5>Phone Calls</h5>
                <Button onClick={() => this.toggleModal("phone")}>
                  + <i className="fa fa-phone fa-lg" />
                </Button>
              </div>
              <RenderPhoneCalls outreach={this.props.customer.outreach} />
            </div>
            <div className="outreach-area col col-sm-6 ml-3">
              <div className="outreach-heading mt-3 pb-3">
                <h5>Emails</h5>
                <Button onClick={() => this.toggleModal("email")}>
                  + <i className="fa fa-envelope" />
                </Button>
              </div>
              <RenderEmails outreach={this.props.customer.outreach} />
            </div>
          </div>
        </div>

        <NewOutreachForm isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal} message={this.state.message} setMessage={this.setMessage} context={this.state.context} setContext={this.setContext} messageType={this.state.messageType} addCall={this.addCall} addEmail={this.addEmail} customer={this.props.customer} />
      </>
    );
  }
}
