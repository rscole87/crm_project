class Customer {
  constructor(name="Name not provided", company = "", email = "", phone = "") {
    this.name = name;
    this.company = company;
    this.email = email;
    this.phone = phone;
    this.id = `${this.name[0]}${this.company[0]}${this.phone[0]}`;
    this.outreach = {
      phone: [
        {
          date: "",
          time: "",
          context: ["New Customer", "New Project", "Status Update", "Billing"],
          message: "",
        },
      ],
      email: [
        {
          date: "",
          time: "",
          context: ["New Customer", "New Project", "Status Update", "Billing"],
          message: "",
        },
      ],
    };
  }
}

export default Customer;
