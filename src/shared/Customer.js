class Customer{
    constructor(name, company="", email="",phone=""){
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.outreach = {
            phone: [
                {
                    date: "",
                    time: "",
                    context: ['New Customer', 'New Project', 'Status Update', 'Billing'],
                    message: ""
                }
            ],
            email: [
                {
                    date: "",
                    time: "",
                    context: ['New Customer', 'New Project', 'Status Update', 'Billing'],
                    message: ""
                }
            ]
        }
    }
}

export default Customer;