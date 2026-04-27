import { users, products } from "./data.js";

/**
 * Create order using rest operator
 * @param {number} userId
 * @param  {...number} productIds
 */
const createOrder = (userId, ...productIds) => {

  const user = users.find(u => u.id === userId);

  const items = productIds.map(id => {
    const product = products.find(p => p.id === id);

    // Destructuring
    const { name, price } = product;

    return { name, price };
  });

  return {
    user: user.name,
    items: [...items] // spread
  };
};

/**
 * Calculate total using rest
 */
const calculateTotal = (...items) =>
  items.reduce((total, item) => total + item.price, 0);

/**
 * Display order in UI
 */
window.showOrder = () => {

  const order = createOrder(1, 1, 2, 3);

  const total = calculateTotal(...order.items);

  let html = `<h2>User: ${order.user}</h2><ul>`;

  order.items.forEach(({ name, price }) => {
    html += `<li>${name} - ₹${price}</li>`;
  });

  html += `</ul><h3>Total: ₹${total}</h3>`;

  document.getElementById("output").innerHTML = html;
};

// ===============================
// Additional ES6 Examples
// ===============================

// Merge objects
const user1 = { name: "Kevin" };
const user2 = { role: "Developer" };

const mergedUser = { ...user1, ...user2 };
console.log("Merged:", mergedUser);

// Filter example
const expensiveProducts = products.filter(
  ({ price }) => price > 10000
);

console.log("Expensive:", expensiveProducts);

// Arrow function variations
const square = x => x * x;
console.log(square(5));
