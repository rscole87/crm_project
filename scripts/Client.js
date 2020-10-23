let template = document.getElementById("client-template");

export default class Client{
    constructor(fName, lName, company, email, phone, rep){
        this._fName = fName;
        this._lName = lName;
        this._company = company;
        this._email = email;
        this._phone = phone;
        this._rep = rep;
        this._outreach = {
            email: [],
            phone: []
        };
        this._recentOutreach = [];
    }

    get fullName() {
        return `${this._fName} ${this._lName}`
    }

    get companyName() {
        return this._company
    }

    get emailAddress() {
        return this._email
    }

    get phoneNumber() {
        return this._phone
    }

    get clientRep() {
        return this._rep
    }

    get emailRecord() {
        return this._outreach.email
    }

    set emailRecord(emailObj){
        this._outreach.email.push(emailObj);
    }

    get phoneRecord() {
        return this._outreach.phone
    }

    set phoneRecord(phoneObj){
        this._outreach.phone.push(phoneObj);
    }

    get recentOutreach() {
        return this._recentOutreach;
    }

    set recentOutreach(outreach) {
        this._recentOutreach.push(outreach);
    }

    get printClient() {
        let clientClone = document.importNode(template.content, true);
        clientClone.querySelector("[client-name]").innerText = this.fullName;
        clientClone.querySelector("[client-phone]").innerText = this._phone;
        clientClone.querySelector("[client-email]").innerText = this._email;
        clientClone.querySelector("[client-company]").innerText = this.companyName;
        clientClone.querySelector("[client-rep]").innerText = this.clientRep;
        let div = document.createElement("div");
        div.appendChild(clientClone);
        console.log(div)
        return div;
    }

}

