import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Customer from "../shared/Customer";
import CUSTOMERLIST from "../shared/customerList";


function CustomerLi(props){
    return(
        <ListGroupItem>    
            {props.name}
        </ListGroupItem>
    )
}
class CustomerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: CUSTOMERLIST,
    };
  }

  render() {
    const customers = this.state.customerList;
    console.log(customers);

    return (
      <>
        <ListGroup>
            {customers.map(customer => (
                <CustomerLi name={customer.name} key={customer.id} />
            ))}
        </ListGroup>
      </>
    );
  }
}

export default CustomerSection;
