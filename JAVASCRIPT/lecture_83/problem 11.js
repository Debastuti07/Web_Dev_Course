// The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function filterProducts(products,criterion){
    const[key,value]=Object.entries(criterion)[0];
    return products.filter(products=>products[key]===value)
}
const products = [
  { name: "T-shirt", category: "Clothing", price: 499 },
  { name: "Sneakers", category: "Footwear", price: 1299 },
  { name: "Jeans", category: "Clothing", price: 999 },
  { name: "Watch", category: "Accessories", price: 1999 }
];

const filtered = filterProducts(products, { category: "Clothing" });
console.log(filtered);