let random=Math.random()

a=prompt("Enter the first number");
b=prompt("Enter the second number");
c=prompt("Enter the operation");

const obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1)
{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}