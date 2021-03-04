//do + - : name , desc, # or email, and for each make a div with a random pfp.

//Html
let inputEl = document.getElementById("inputEl");
let btnEL = document.getElementById("buttonEL");
let containerEL = document.getElementById("container");
let AllBtn = document.getElementById("allBtnEL");
let favBTn = document.getElementById("favBTn");
//Vars


//events listeners
document.addEventListener("keydown", keydownHandler);
btnEL.addEventListener("click", search)
AllBtn.addEventListener("click", AllHandler);

//Arrays
let contacts = [];
const imgArray = ["", "imgs/image1.jpg", "imgs/image2.jpg", "imgs/image3.jpg"];
let searchcontact = [];
let favContacts = [];


function AllHandler() {
    contactHandler(contacts);
}

function search() {
    let input = inputEl.value;
    searchcontact = [];
    let inputArray = input.split(/(?:,| )+/);


    for (let l = 0; l < contacts.length; l++) {

        for (n = 0; n < inputArray.length; n++) {
            if (contacts[l][0] === inputArray[n]) {
                searchcontact.push(contacts[l]);
            }
        }

    }
    contactHandler(searchcontact);
}


function keydownHandler(event) {


    if (event.keyCode === 13) {
        var contact = [prompt("Their name?"), prompt("Their phone number/ contact info (email)?"), prompt("A description of them?"), imgArray[randomInt(1, 4)], false];

        contacts.push(contact);
        contactHandler(contacts);

    }

    if (event.keyCode === 46) {
        let delContact = prompt("Who do you want to delete?!");
        delHandler(delContact);

    }

}

function divHandler(name, desc, number, pic, i) {
    let div = document.createElement("div");


    let img = document.createElement("img");
    img.src = pic;
    div.appendChild(img)

    let btn = document.createElement("button");
    btn.innerHTML = "Favourite";
    btn.addEventListener("click", () => {
        favHandler(i)
    });




    div.appendChild(btn);

    btn.classList.add("btn");
    div.classList.add("div");
    img.classList.add("img");

    div.innerHTML += `${name}, ${desc} - ${number}`;
    containerEL.appendChild(div);

    console.log(contacts[i][4]);

}

function delHandler(person) {

    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i][0] === person) {
            contacts.splice(i, 1);

        }
    }
    contactHandler(contacts);

}

function contactHandler(array) {


    containerEL.innerHTML = "";

    for (let i = 0; i < array.length; i++) {

        //divHandler(contacts[i][0], contacts[i][1], contacts[i][2], contacts[i][3]);
        divHandler(array[i][0], array[i][2], array[i][2], array[i][3], i);
    }


}


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);

}


function favHandler(n) {
    console.log("test");
    for (q = 0; q < contacts.length; q++) {
        if (contacts[n][4] == true) {
            favContacts.push(contacts[n]);
        }
    }
}