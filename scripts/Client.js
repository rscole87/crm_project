let template = document.getElementById("client-template");

export default class Client{
    constructor(fName, lName, company, email, phone, rep){
        this._fName = fName;
        this._lName = lName;
        this._company = company;
        this._email = email;
        this._phone = phone;
        this._rep = rep;
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

    get printClient() {
        let clientClone = document.importNode(template.content, true);
        clientClone.querySelector("[client-name]").innerText = this.fullName;
        clientClone.querySelector("[client-company]").innerText = this.companyName;
        clientClone.querySelector("[client-rep]").innerText = this.clientRep;
        let div = document.createElement("div");
        div.appendChild(clientClone);
        console.log(div)
        return div;
    }
}
