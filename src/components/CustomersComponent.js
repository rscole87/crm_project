import React, { Component } from "react";
import { ListGroup, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { RenderCustomerLi, RenderCustomerProfile } from "./Customer";
import CUSTOMERLIST from "../shared/customerList";

class CustomerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      customerList: CUSTOMERLIST,
      activeCustomer: CUSTOMERLIST[0],
      nameInput: "",
      companyInput: "",
      emailInput: "",
      phoneInput: "",
    };

    this.setActiveCustomer = this.setActiveCustomer.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  setActiveCustomer(customer) {
    this.setState({
      activeCustomer: customer,
    });
    console.log(`Customer changed: ${customer.state.name}`);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    const customers = this.state.customerList;

    return (
      <section id="customer-section">
        <ListGroup>
          <Button onClick={this.toggleModal}>New Customer +</Button>
          {customers.map((customer) => (
            <RenderCustomerLi name={customer.state.name} key={customer.state.id} customerObj={customer} setActiveCustomer={this.setActiveCustomer} />
          ))}
        </ListGroup>
        <RenderCustomerProfile customer={this.state.activeCustomer} />

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>New Customer</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input type="text" id="phone" name="phone" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" name="email" />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Add Customer</Button>
            </Form>
          </ModalBody>
        </Modal>
      </section>
    );
  }
}

export default CustomerSection;
