/**
 * Array to store cart items
 * Each item is an object { name, price }
 */
let cart = [];

/**
 * Adds item to cart array
 */
function addItem() {
  let name = document.getElementById("itemName").value;
  let price = document.getElementById("itemPrice").value;

  if (name === "" || price === "") {
    alert("Enter item details");
    return;
  }

  // Add item to array
  cart.push({
    name: name,
    price: Number(price)
  });

  clearInputs();
  renderCart();
}

/**
 * Displays cart items
 */
function renderCart() {
  let list = document.getElementById("cartList");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    let li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button>
    `;

    list.appendChild(li);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

/**
 * Removes item from array
 * @param {number} index
 */
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

/**
 * Clears input fields
 */
function clearInputs() {
  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
}
