import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";

export function NewOutreachForm(props) {


    function handleSubmit(e) {
      e.preventDefault();
      console.log(props.messageType)
      if(props.messageType === 'phone'){
        props.addCall(props.message, props.context)
      } 
      
      if (props.messageType === 'email'){
        props.addEmail(props.message, props.context)
      }

      props.setMessage("");
      props.setContext("");
      props.toggleModal();
    }
  
    return (
      <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>New Customer</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Message</Label>
              <Input type="text" id="name" name="name" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="context">Context</Label>
              <Input type="text" id="context" name="context" value={props.context} onChange={(e) => props.setContext(e.target.value)} />
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Add Outreach
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }