// check localstorage
if (localStorage.getItem("contacts") == undefined) {
  localStorage.setItem("contacts", "[]");
}
//show on the web page
let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));
for (i = 0; i < contacts.length; i++) {
  result += `<div class="contact_item">
    <i class="far fa-user fa-2x color_primary"></i>
    <div class="contact_item_info">
      <h4>${contacts[i].name}</h4>
      <p>${contacts[i].phone}</p>
    </div>
    <i class="far fa-times-circle color_primary delete_contact" onclick="deleteContact('${contacts[i].id}')"></i>
  </div>`;
}
document.getElementsByClassName("contact_body")[0].innerHTML = result;

function submitContact(e) {
  e.preventDefault();
  let contact_name = document.getElementById("name").value;
  let contact_number = document.getElementById("number").value;
  //   console.log(contact_name, contact_number);

  //check what type of data we are getting.

  //   let contacts = localStorage.getItem("contacts");

  //   console.log(contacts); //[] empty array
  //   console.log(typeof contacts); //[] empty array //

  //convert
  //   When receiving data from a web server, the data is always a string.
  //   Parse the data with JSON.parse(), and the data becomes a JavaScript object.

  let contacts = JSON.parse(localStorage.getItem("contacts"));
  //   console.log(contacts);

  //create single contact object
  let contact = {
    id: Math.random().toString(36).substr(2, 9),
    name: contact_name,
    phone: contact_number,
  };

  //push into array
  contacts.unshift(contact);
  //   console.log(contacts);

  //set into localstorage
  // When sending data to a web server, the data has to be a string.
  // Convert a JavaScript object into a string with JSON.stringify().

  localStorage.setItem("contacts", JSON.stringify(contacts));
  //   console.log(contacts);
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  location.reload();
}

//Delete operation
function deleteContact(id) {
  //   console.log(id);
  let contacts = JSON.parse(localStorage.getItem("contacts"));
  contacts = contacts.filter(function (contact) {
    return contact.id != id;
  });
  //   console.log(contacts);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  location.reload();
}
