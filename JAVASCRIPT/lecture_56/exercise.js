//q1

let num=17;
if(num>10&&num<20){
    console.log(`${num}`,"is between 10 and 20");
    
}
else{
    console.log(`${num}`,"is not between 10 and 20");

}


//q2


let day = 3; 

switch (day) {
  case 1:
    console.log("It's Monday ");
    break;
  case 2:
    console.log("It's Tuesday ");
    break;
  case 3:
    console.log("It's Wednesday ");
    break;
  case 4:
    console.log("It's Thursday ");
    break;
  case 5:
    console.log("It's Friday ");
    break;
  case 6:
    console.log("It's Saturday ");
    break;
  case 7:
    console.log("It's Sunday ");
    break;
  default:
    console.log("Umm... that's not a valid day ");
}


//q3
let n=8
if(n%2==0 && n%3==0)
{
    console.log(`${n}`,"is divisable by 2 and 3");
    
}

else{
    console.log(`${n}`,"is not divisable by 2 and 3");

}

//q4
let age=25
if(age>=18)
{
    console.log("you can drive");
    
}
else{
    console.log("you can't drive");
    
}