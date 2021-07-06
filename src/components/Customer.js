export class Customer {
  constructor(name = "Name not provided", company = "", email = "", phone = "") {
    this.name = name;
    this.company = company;
    this.email = email;
    this.phone = phone;
    this.id = `${name[0]}${company[0]}${phone[0]}`;
    this.outreach = {
      phone: [],
      email: [],
    };
  }

  addCall() {
    console.log("call added");
  }

  addEmail() {
    console.log("email added");
  }
}
