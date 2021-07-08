import React, { Component } from "react";
import { ListGroup, Button } from "reactstrap";
import { RenderCustomerLi, CustomerProfile } from "./RenderCustomerData";
import { NewCustomerForm } from "./NewCustomerForm";
import CUSTOMERLIST from "../shared/customerList";

class CustomerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      customerList: CUSTOMERLIST,
      activeCustomer: CUSTOMERLIST[0],
    };

    this.setActiveCustomer = this.setActiveCustomer.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.setCustomers = this.setCustomers.bind(this);
  }

  setActiveCustomer(customer) {
    this.setState({
      activeCustomer: customer,
    });
    console.log(`Customer changed: ${customer.name}`);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  setCustomers(newCustomer) {
    this.setState({
      customerList: [...this.state.customerList, newCustomer],
    });
  }

  render() {
    const customers = this.state.customerList;

    return (
      <section id="customer-section">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col col-sm-2">
              <ListGroup>
                <Button onClick={this.toggleModal}>
                  <i className="fa fa-user-plus fa-lg" />
                </Button>
                {customers.map((customer) => (
                  <RenderCustomerLi key={customer.id} customer={customer} setActiveCustomer={this.setActiveCustomer} />
                ))}
              </ListGroup>
            </div>
            <div className="col col-sm-10">
              <CustomerProfile customer={this.state.activeCustomer} />
            </div>
            <NewCustomerForm toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} setCustomers={this.setCustomers} customerList={this.state.customerList} />
          </div>
        </div>
      </section>
    );
  }
}

export default CustomerSection;
