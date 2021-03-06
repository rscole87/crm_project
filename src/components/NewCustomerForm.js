import React, {useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { Customer } from "../shared/Customer";

export function NewCustomerForm(props) {
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
    props.toggleModal();
  }

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>New Customer</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <Input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Add Customer
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}