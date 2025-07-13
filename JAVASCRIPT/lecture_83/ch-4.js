//question 1
console.log("har\"".length);//returns 4


//question 2
let name="Megha";
console.log(name.includes("e"));//returns true
console.log(name.startsWith("D"));//returns false
console.log(name.endsWith("a"));//returns true


//question 3
let new_name="TUTI"
console.log(new_name.toUpperCase());


//question 4
let str="Please give Rs 1000"
console.log(str.match(/\d+/)[0]); //\d+is for digit


//question 5
console.log(str.replace("1000","2000"));
//replace but can't change directly ..as strings are immutable