// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
function placeOrder(orderDetails){
    return new Promise((resolve)=>{
        let delay=Math.floor(Math.random()*3000)+1000;
        setTimeout(() => {
           resolve(`Order Confirmed! Your ${orderDetails.item} (Qty: ${orderDetails.quantity}) will be shipped soon.`);
        }, delay);
    })
}
const order={
    item:"mobile",
    quantity:2
}
placeOrder(order).then((confirmation)=>{
    console.log(confirmation);
    
})