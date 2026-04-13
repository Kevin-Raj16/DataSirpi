// ===============================
// 1. Basic Variable Declarations
// ===============================

// var → function scoped, can be redeclared
var name = "Kevin";

// let → block scoped, can be updated
let age = 22;

// const → cannot be reassigned
const country = "India";

// ===============================
// 2. Display Variables
// ===============================

function showVariables() {

  age = 23; // updating let
  var name = "Kevin Raj"; // redeclaring var

  let isDeveloper = true;
  let skills = ["HTML", "CSS", "JavaScript"];

  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Country: " + country + "<br>" +
    "Developer: " + isDeveloper + "<br>" +
    "Skills: " + skills.join(", ");
}

// ===============================
// 3. Scope Example
// ===============================

function scopeExample() {

  if (true) {
    var x = "var is function scoped";
    let y = "let is block scoped";
  }

  console.log("var x:", x); // accessible
  // console.log(y); ❌ Error (block scoped)
}

// ===============================
// 4. Hoisting Example
// ===============================

console.log(testVar); // undefined (hoisted)
var testVar = "Hoisting with var";

// console.log(testLet); ❌ ReferenceError
let testLet = "No hoisting";

// ===============================
// 5. Reassignment Example
// ===============================

function reassignExample() {

  let score = 10;
  score = 20; // allowed

  const pi = 3.14;
  // pi = 3.15; ❌ Error

  console.log("Score:", score);
  console.log("PI:", pi);
}

// ===============================
// 6. Data Types Example
// ===============================

function dataTypesExample() {

  let text = "Hello";        // string
  let number = 100;          // number
  let isActive = true;       // boolean
  let empty = null;          // null
  let notDefined;            // undefined
  let obj = { name: "Kevin" }; // object

  console.log(text, number, isActive, empty, notDefined, obj);
}

// ===============================
// 7. Dynamic Input Example
// ===============================

function saveName() {
  let user = document.getElementById("username").value;

  document.getElementById("output").innerHTML =
    "Hello " + user + ", welcome!";
}

// ===============================
// 8. Swap Values Example
// ===============================

function swapExample() {

  let a = 5;
  let b = 10;

  // Swap using temp variable
  let temp = a;
  a = b;
  b = temp;

  console.log("After swap:", a, b);
}

// ===============================
// 9. Global vs Local Variables
// ===============================

let globalVar = "I am global";

function checkScope() {

  let localVar = "I am local";

  console.log(globalVar); // accessible
  console.log(localVar);  // accessible here only
}

// ===============================
// 10. Constant Object Example
// ===============================

function constObjectExample() {

  const user = {
    name: "Kevin",
    age: 22
  };

  // Allowed: updating object property
  user.age = 23;

  console.log(user);

  // Not allowed:
  // user = {} ❌ Error
}
