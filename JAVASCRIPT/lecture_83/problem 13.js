// The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
function calculateTotal(products){
    let total=0;
    for(let product of products){
        total+=product.price*product.quantity
    }
    return total;
}
const cart = [
  { name: "Lipstick", 
    price: 299, 
    quantity: 2 },
  { name: "Sneakers", 
    price: 1999, 
    quantity: 1 },
  { name: "Sunglasses", 
    price: 799, 
    quantity: 3 }
];

const totalCost = calculateTotal(cart);
console.log("Total Cart Cost: ₹" + totalCost);