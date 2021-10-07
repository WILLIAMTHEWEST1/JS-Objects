let contacts = [];


function addContact() {

    //retrieve the items or values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;


    //create the object with the variable we created above
    const contact = {
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    //set items

    contacts.push(contact);
    displayContacts(contacts);

    //clears form after add button
    document.getElementById("myForm").reset();
}

function displayContacts(contacts) {

    document.getElementById("results").innerHTML = "";

    for (let index = 0; index < contacts.length; index++) {

        let templateRow = `<tr><td>${contacts[index].firstName}</td><td>${contacts[index].lastName}</td><td>${contacts[index].email}</td></tr>`;
        document.getElementById("results").innerHTML += templateRow;
    }
}