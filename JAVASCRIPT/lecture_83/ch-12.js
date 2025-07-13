// question 1
setTimeout(() => {
    console.log("hello");
}, 2000);
setTimeout(() => {
    console.log("world");
    
}, 4000);


// question 2
function avg(...numbers){
    let result=numbers.reduce((sum,num)=>sum+num,0);
    return result/numbers.length;
}
console.log(avg(10,20,30));


//question 3
function wait(n){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`resolved after ${n}`);
        }, n*1000);
    })
}
(async()=>{
    console.log(await wait(1));
    console.log(await wait(2));
    console.log(await wait(3));
})();


//question 4
let p=parseFloat(prompt("enter principal amount"));
let r=parseFloat(prompt("enter the rate"));
let t=parseFloat(prompt("enter the time"));
let simpleInterest=(p*r*t)/100;
console.log(simpleInterest);