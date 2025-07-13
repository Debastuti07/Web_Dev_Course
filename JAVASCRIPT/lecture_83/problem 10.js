// The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function brewCoffee(coffee) {
    return new Promise ((resolve)=>{
         const delay = Math.floor(Math.random() * 3000) + 1000;
         setTimeout(() => {
            resolve(`${coffee}`)
         }, delay);
    })
}
brewCoffee("Expresso").then((msg)=>{
    console.log(msg);
    
})