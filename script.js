/**
 * Array to store users (each user is an object)
 * @type {Array<{name: string, age: number}>}
 */
let users = [];

/**
 * Adds a new user object to the array
 */
function addUser() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Enter all details");
    return;
  }

  // Create object
  let user = {
    name: name,
    age: Number(age)
  };

  // Add to array
  users.push(user);

  clearInputs();
  renderUsers();
}

/**
 * Displays users in UI
 */
function renderUsers() {
  let list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${user.name} (Age: ${user.age})
      <button onclick="deleteUser(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

/**
 * Deletes a user from array
 * @param {number} index
 */
function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

/**
 * Clears input fields
 */
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
