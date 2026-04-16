// ===============================
// 1. Basic Data Types
// ===============================

function showDataTypes() {

  let text = "Kevin";        // String
  let number = 100;          // Number
  let isActive = true;       // Boolean
  let empty = null;          // Null
  let notDefined;            // Undefined

  document.getElementById("output").innerHTML =
    "String: " + text + "<br>" +
    "Number: " + number + "<br>" +
    "Boolean: " + isActive + "<br>" +
    "Null: " + empty + "<br>" +
    "Undefined: " + notDefined;
}

// ===============================
// 2. Object Example
// ===============================

function objectExample() {

  let user = {
    name: "Kevin",
    age: 22,
    isDeveloper: true
  };

  document.getElementById("output").innerHTML =
    "Name: " + user.name + "<br>" +
    "Age: " + user.age + "<br>" +
    "Developer: " + user.isDeveloper;
}

// ===============================
// 3. Array Example
// ===============================

function arrayExample() {

  let skills = ["HTML", "CSS", "JavaScript"];

  document.getElementById("output").innerHTML =
    "Skills: " + skills.join(", ");
}

// ===============================
// 4. Type Checking Example
// ===============================

console.log(typeof "Hello");     // string
console.log(typeof 10);          // number
console.log(typeof true);        // boolean
console.log(typeof null);        // object (JS quirk)
console.log(typeof undefined);   // undefined
