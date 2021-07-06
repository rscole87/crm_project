import React from "react";
import { Button, Label, Form, FormGroup, Input } from "reactstrap";

export function Contact() {
  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label htmlFor="firstName" md={2}>
            First Name
          </Label>
          <Input type="text" className="form-control" name="firstName" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName" md={2}>
            Last Name
          </Label>
          <Input type="text" className="form-control" name="lastName" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email" md={2}>
            Email
          </Label>
          <Input type="email" className="form-control" name="email" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phoneNum" md={2}>
            Phone
          </Label>
          <Input type="text" className="form-control" name="phoneNum" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message" md={2}>
            Message
          </Label>
          <Input type="textarea" className="form-control" rows="6" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
}
