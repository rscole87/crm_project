import React, { Component, useState } from "react";
import { ListGroup, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { Customer, RenderCustomerLi, RenderCustomerProfile } from "./Customer";
import CUSTOMERLIST from "../shared/customerList";

function NewCustomerForm(props) {
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setCustomers(new Customer(name, company, email, phone));
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    props.toggleModal()
  }

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>New Customer</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" name="company" value={company} onChange={e => setCompany(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Add Customer
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
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
    console.log(`Customer changed: ${customer.state.name}`);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  setCustomers(newCustomer){
      this.setState({
          customerList: [...this.state.customerList, newCustomer]
      })
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
        <NewCustomerForm toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} setCustomers={this.setCustomers} customerList={this.state.customerList}/>
      </section>
    );
  }
}

export default CustomerSection;
