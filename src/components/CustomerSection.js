import React, { Component } from "react";
import { ListGroup, Button } from "reactstrap";
import { RenderCustomerLi, CustomerProfile } from "./RenderCustomerData";
import { NewCustomerForm } from "./NewCustomerForm";

class CustomerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    const customers = this.props.customerList;

    return (
      <section id="customer-section">
        <div className="container-fluid container-lg py-5">
          <div className="row">
            <div className="col col-sm-2">
              <ListGroup>
                <Button onClick={this.toggleModal}>
                  <i className="fa fa-user-plus fa-lg" />
                </Button>
                {customers.map((customer) => (
                  <RenderCustomerLi key={customer.id} customer={customer} setActiveCustomer={this.props.setActiveCustomer} />
                ))}
              </ListGroup>
            </div>
            <div className="col col-sm-10">
              <CustomerProfile customer={this.props.activeCustomer} />
            </div>
            <NewCustomerForm toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} setCustomers={this.props.setCustomers} customerList={this.props.customerList} />
          </div>
        </div>
      </section>
    );
  }
}

export default CustomerSection;
