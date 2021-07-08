import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";

export function NewOutreachForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.messageType);
    if (props.messageType === "phone") {
      props.addCall(props.message, props.context);
    }

    if (props.messageType === "email") {
      props.addEmail(props.message, props.context);
    }

    props.setMessage("");
    props.setContext("");
    props.toggleModal();
  }

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}> Outreach</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Message</Label>
            <Input type="text" id="name" name="name" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="context">Context</Label>
            <select name="context" id="context" className="form-select" value={props.context} onChange={(e) => props.setContext(e.target.value)}>
              <option value={null} selected>Select Context...</option>
              <option value="account-setup">Account Setup</option>
              <option value="billing">Billing</option>
              <option value="contracts">Contracts</option>
              <option value="status">Status</option>
            </select>
          </FormGroup>
          <Button type="submit" value="submit" color="primary">
            Add Outreach
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
