// ===============================
// 1. Simple Function
// ===============================

function greetUser() {
  let name = "Kevin";
  document.getElementById("output").innerHTML = "Hello " + name;
}

// ===============================
// 2. Function with Parameters
// ===============================

function add(a, b) {
  return a + b;
}

function addNumbers() {
  let result = add(10, 20);
  document.getElementById("output").innerHTML = "Sum: " + result;
}

// ===============================
// 3. Function with Condition
// ===============================

function checkEvenOdd() {
  let num = 7;

  if (num % 2 === 0) {
    document.getElementById("output").innerHTML = num + " is Even";
  } else {
    document.getElementById("output").innerHTML = num + " is Odd";
  }
}

// ===============================
// 4. Arrow Function
// ===============================

const multiply = (a, b) => a * b;

function arrowFunctionExample() {
  let result = multiply(5, 4);
  document.getElementById("output").innerHTML = "Multiply: " + result;
}

// ===============================
// 5. Function with Default Parameters
// ===============================

function greet(name = "Guest") {
  console.log("Hello " + name);
}

// ===============================
// 6. Callback Function
// ===============================

function processUser(callback) {
  let user = "Kevin";
  callback(user);
}

processUser(function(name) {
  console.log("Processing user: " + name);
});

// ===============================
// 7. Function Returning Object
// ===============================

function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

console.log(createUser("Kevin", 22));

// ===============================
// 8. Function Expression
// ===============================

const square = function(num) {
  return num * num;
};

console.log(square(5));
