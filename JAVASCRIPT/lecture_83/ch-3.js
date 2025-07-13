//question 1
let markss={
    "Harry":98,
    "Rohan":70,
    "Aakash":7
}
let keys=Object.keys(markss);
for(let i=0;i<keys.length;i++){
    let name=keys[i];
    console.log(`${name} got ${markss[name]}`);
}


//question 2
let marks={
    "Harry":98,
    "Rohan":70,
    "Aakash":7
}
for(let name in marks){
    console.log(`${name} got ${marks[name]}`);
}


//question 3
let num;
let correct_num=7;
while(num!=correct_num)
{
   num=prompt("enter the number");
   if(num!=correct_num){
    console.log("Try again");
   }
   else{
    console.log("Correct number");
   }
}


//question 4
let a=parseInt(prompt("enter number 1"));
let b=parseInt(prompt("enter number 2"));
let c=parseInt(prompt("enter number 3"));
let d=parseInt(prompt("enter number 4"));
let e=parseInt(prompt("enter number 5"));
function mean(a,b,c,d,e) {
    return((a+b+c+d+e)/5);
}
let meanoffive=mean(a,b,c,d,e);
console.log(meanoffive);
