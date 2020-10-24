import Client from "./Client.js"
import Outreach from "./Outreach.js"
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
        option.value = client.fullName;
        option.innerText = client.fullName;
        clientListSelect.appendChild(option);
    })
}

const resetActiveClient = () =>{
    activeClientDiv.innerHTML = "";
}

newClientBttn.addEventListener("click", () =>{
    clientIntakeForm.style.display = "block";
})

const configureCloseBttns = () =>{
    let closeBttns = Array.from(document.getElementsByClassName("close-bttn"));
    closeBttns.forEach(bttn => {
        bttn.addEventListener("click", resetActiveClient)
    });
}

const configureOutreachBttns = () =>{
    let outreachBttns = Array.from(document.getElementsByClassName("outreach-bttn"));
    outreachBttns.forEach(bttn => {
        bttn.addEventListener("click", () =>{
            bttn.previousElementSibling.style.display = "block"
            bttn.remove();
        })
    })
}

const configureClientDiv = (client) =>{
    configureCloseBttns()
    configureOutreachBttns()
    processClientOutreach();
    displayRecentOutreach(client);

}


clientListSelect.addEventListener("input", () =>{
    clientDatabase.forEach(client =>{
        if(clientListSelect.value === client.fullName){
            resetActiveClient();
            activeClientDiv.appendChild(client.printClient);
            configureClientDiv(client)
            return client.printClient;
        }
    })
});

const displayRecentOutreach = (client) =>{
    let outreachList = document.getElementById("recent-outreach-list");
    outreachList.innerHTML = "";
    if(client.outreachRecord.length > 0){
        client.outreachRecord.forEach(outreach =>{
            let li = document.createElement("li");
            let type = outreach.type;
            let date = outreach.date;
            let time = outreach.time;
            let message = outreach.message;
            li.appendChild(document.createTextNode(`${type} - ${date} at ${time}: ${message}`));
            outreachList.appendChild(li);
        })
    }
}


const formattedTime = (date) =>{
    let amOrPm;

    if (date.getHours() < 12){
        amOrPm = "am"
    } else {
        amOrPm = "pm"
    }

    return `${date.getHours()%12}:${timeMinutes(date)}${amOrPm}`
}

const timeMinutes = (date) =>{
    let minutes = date.getMinutes()
    if (minutes < 10){
        return `0${minutes}`
    } 
    return minutes;
}

const formattedDate = (date) =>{
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}

const processClientOutreach = () =>{
    let form = document.getElementById("client-outreach-form");

    form.onsubmit = function (e){
        e.preventDefault();
        let outreachType = form.outreachtype.value;
        let date = new Date;
        console.log(date)
        let outreachDate = formattedDate(date);
        let outreachTime = formattedTime(date);
        let outreachMessage = form.message.value;
        let newOutreach = new Outreach(outreachType, outreachDate, outreachTime, outreachMessage)

        clientDatabase.forEach(client =>{
            if(clientListSelect.value === client.fullName){
                client.outreachRecord.push(newOutreach);
                displayRecentOutreach(client);
            }
        })
        form.reset();
    }
}
