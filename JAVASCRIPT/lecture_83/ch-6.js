//question 1
let age=prompt("enter an age");
age=parseInt(age);
if (age>=18) {
    alert("you can drive");
}
else{
    alert("you can't drive");
}


//question 2
let tryagain=true;
while(tryagain){

    let d_age=prompt("enter an age");
    d_age=parseInt(d_age);
    if (d_age>=18) {
        alert("you can drive");
    }
    else{
        alert("you can't drive");
    }
    tryagain=confirm("check again?")
}


//question 3
let try_again=true;
while(try_again){

    let dr_age=prompt("enter driving age");
    dr_age=parseInt(dr_age);
    if (dr_age>=18) {
        alert("you can drive");
    }
    else if(dr_age<0)
    {
        console.error("The age is negative");
    }
    else{
        alert("you can't drive");
    }
    try_again=confirm("check again?");
}


//question 4
let num=prompt("Enter the number");
num=parseInt(num);
if(num>4){
    location.href="https://www.google.com";
}
else{
    console.log(num);
}


//question 5
let colour=prompt("Enter the colour");
document.body.style.backgroundColor=colour;
console.log(colour);