import Client from "./Client.js"
let clientDatabase = [];
let newClientBttn = document.getElementById("new-client-bttn");
let clientIntakeForm = document.getElementById("client-intake-form");
let clientList = document.getElementById("client-list");
let clientListSelect = document.getElementById("client-list-select");
let activeClientDiv = document.getElementById("active-client-div");


clientIntakeForm.onsubmit = function (e){
    e.preventDefault();
    let fName = clientIntakeForm.fName.value;
    let lName = clientIntakeForm.lName.value;
    let company = clientIntakeForm.company.value;
    let email = clientIntakeForm.email.value;
    let phone = clientIntakeForm.phone.value;
    let rep = clientIntakeForm.repName.value;
    let client = new Client(fName, lName, company, email, phone, rep);
    console.log(client);
    clientDatabase.push(client);
    clientIntakeForm.reset();
    clientIntakeForm.style.display = "none";
    updateClientList();
    updateClientListSelect();
    activeClientDiv.innerHTML = "";
    return client;
}

const updateClientList = () =>{
    clientList.innerHTML = "";
    clientDatabase.forEach(client => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`${client.fullName}`));
        clientList.appendChild(li);
    })
}

const updateClientListSelect = () =>{
    clientListSelect.innerHTML = "<option>Select Client</option>";
    clientDatabase.forEach(client => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(`${client.fullName}`));
        clientListSelect.appendChild(option);
    })
}

newClientBttn.addEventListener("click", () =>{
    clientIntakeForm.style.display = "block";
})


clientListSelect.addEventListener("input", () =>{
    console.log(clientListSelect.value)
    let clientPrint;
    clientDatabase.forEach(client =>{
        if(clientListSelect.value !== "Select Client" && 
            client.fullName === clientListSelect.value){
            clientPrint = client.printClient;
            activeClientDiv.innerHTML = "";
            activeClientDiv.appendChild(clientPrint);
            return clientPrint
        }
    })
});