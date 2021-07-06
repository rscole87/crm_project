import React from "react";
import { ListGroupItem, Button } from "reactstrap";

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
      <>
        {phoneCalls.map((call, idx) => (
          <li key={idx}>
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

function RenderEmails({ outreach }) {
  let emails;
  if (outreach.email) {
    emails = outreach.email;
    return (
      <>
        {emails.map((email, idx) => (
          <li key={idx}>
            {email.date}
            {email.time}
            {email.message}
          </li>
        ))}
      </>
    );
  }

  return <div></div>;
}

export function CustomerProfile(props) {
  return (
    <>
      <div className="client-profile p-4">
        <div className="profile-heading">
          <h3>{props.customer.name}</h3>
          <h5 className="company-heading">{props.customer.company}</h5>
          <p>{props.customer.email}</p>
          <p>{props.customer.phone}</p>
        </div>
        <div className="row">
          <div className="col col-sm-6">
            <div className="outreach-heading">
              <h5>Phone Calls</h5>
              <Button onClick={props.customer.addCall}>
                + <i className="fa fa-phone fa-lg" />
              </Button>
            </div>
            <RenderPhoneCalls outreach={props.customer.outreach} />
          </div>
          <div className="col col-sm-6">
            <div className="outreach-heading">
              <h5>Emails</h5>
              <Button onClick={props.customer.addEmail}>
                + <i className="fa fa-envelope" />
              </Button>
            </div>
            <RenderEmails outreach={props.customer.outreach} />
          </div>
        </div>
      </div>
    </>
  );
}
