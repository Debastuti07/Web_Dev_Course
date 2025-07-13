//question 1
let age=prompt("enter the age");
age=parseInt(age);
if(age>10 && age<20)
{
    console.log("the age is lies between 10 and 20");
}
else{
    console.log("The age is not lies between 10 and 20");   
}


//question 2
// swich case uses to check the condition with the cases and break the loop when it matches 


//question 3
let num=prompt("Enter the number");
num=parseInt(num);
if(num%2==0 && num%3==0)
{
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible by 2 and 3");
}


//question 4
let new_num=prompt("Enter the new number");
new_num=parseInt(new_num);
if(new_num%2==0 || new_num%3==0)
{
    console.log("The number is divisible by either 2 or 3");
}
else{
    console.log("The number is not divisible by either 2 or 3");
}


//question 5
let new_age=prompt("enter the driving age");
new_age=parseInt(new_age);
let result=(new_age>=18)?"you can drive":"you can't drive";
console.log(result);