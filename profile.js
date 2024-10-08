function catchInput() {
  var username = document.getElementById("name").value;
  alert('Welcome ' + username.trim() + '!');
}

// No need to define form, JS will auto detect it by ID.
// We can also access each element's value:
// e.g.1: var x = document.getElementById("elementID").value;
// e.g.2: let x = document.forms["formID"]["elementID"].value;
