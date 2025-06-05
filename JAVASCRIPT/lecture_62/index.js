let random=Math.random()
let first,second,third
if(random<0.33)
{
     first="crazy";
     second="Engine";
     third="Bros";
}
else if(random>0.33 && random<0.66)
{
    first="Amazing";
    second="Foods";
    third="Limited";
}
else{
    first="Fire";
    second="Garments";
    third="Hub"
}

console.log(`${first} ${second} ${third}`);
