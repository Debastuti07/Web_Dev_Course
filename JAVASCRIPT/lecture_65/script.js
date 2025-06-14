a=prompt("enter the number");
if(a<0)
    {
        console.log("factorial invalid");
        
    }
    else{
         let fact=1;
        for(let i=1;i<=a;i++)
        {
           fact*=i;
        }
    
}
console.log("the factorial is ",fact);
