// 1. we want to be able to store a list of contacts
// 2. each contact we want to store a name, email address, mobile phone number
// 3. we want to be able to add a new contact
// 4.                      - update an existing contact
// 5.                      - delete an existing contact
// 6.                      - search for a contact by their email
// 7. implement saving/loading

const prompt = require('prompt-sync')();

let contactList = [
    {
        "id": 1,
        "name": "Mary Sue",
        "email": "mary@asd.com",
        "mobile": "+65 11223344"
    },
    {
        "id": 2,
        "name": "John Smith",
        "email": "johnsmith@asd.com",
        "mobile": "+65 771 7723"
    }
]

function listContacts(contacts) {
    let i = 0;
    while (i < contacts.length) {
        console.log(contactList[i].name, contactList[i].email);
        console.log(contactList[i].mobile)
        console.log();
        i++;
    }
}

function addContact(contacts, name, email, mobile) {
    let newContact = {
        "id": Math.floor(Math.random() * 1000) + 1,
        "name": name,
        "email": email,
        "mobile": mobile
    }
    contacts.push(newContact);
}

function deleteContact(contacts, idToDelete) {
    // find the index from the id first
    let indexToDelete = -1;
    let i = 0;
    while (i < contacts.length) {
        if (contacts[i].id == idToDelete) {
            indexToDelete = i;
            break;
        }
        i++;
    }
    contacts.splice(indexToDelete, 1);
}

function updateContact(contacts, id, newName, newEmail, newMobile) {
    let indexToUpdate = -1;
    let i = 0;
    while (i < contacts.length) {
        if (contacts[i].id == id) {
            indexToUpdate = i;
            break;
        }
        i++;
    }
    contacts[indexToUpdate].name = newName;
    contacts[indexToUpdate].email = newEmail;
    contacts[indexToUpdate].mobile = newMobile;
}

function main() {
    while (true) {
        console.log("Welcome to Contact Manager")
        console.log("1. Show all contacts");
        console.log("2. Add a new contact");
        console.log("3. Update an existing contact");
        console.log("4. Delete an existing contact");
        console.log("5. Exit");
        let choice = parseInt(prompt("Please enter your choice: "));
        if (choice == 1) {
            listContacts(contactList);
        }
        if (choice==5) {
            break;
        }
    }

}
main();

// addContact(contactList, "Tony Stare", "tony@asd.com", "+65 456 4567");
// deleteContact(contactList, 2);

// updateContact(contactList, 2, "Peter Barker", "peter@asd.com", "+65 1111111");
// listContacts(contactList);